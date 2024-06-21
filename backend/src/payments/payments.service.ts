import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePaymentDto, PaymentRequests } from './dto/create-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreatePaymentDto): Promise<any> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { Id: userId },
      });

      if (!user) {
        throw new Error(`User with ID ${userId} not found`);
      }

      const card = await this.prisma.cards.findFirst({
        where: { Id: dto.cardId },
      });

      if (!card) {
        throw new Error(`Card with ID ${dto.cardId} not found`);
      }

      const courier = await this.prisma.couriers.findFirst({
        where: { courierServiceName: dto.courierServiceName },
      });

      if (!courier) {
        throw new Error(
          `Courier with name ${dto.courierServiceName} not found`,
        );
      }

      const gross_amount = card.prices + courier.price;

      const paymentRequest = PaymentRequests(
        gross_amount,
        dto.cardId,
        dto.bank,
        user,
      );

      const body = JSON.stringify(paymentRequest);

      const secret = process.env.MIDTRANS_SERVER_KEY;
      const encodedSecret = Buffer.from(secret).toString('base64');

      const url = `${process.env.MIDTRANS_BASE_URL}/v2/charge`;
      const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Basic ${encodedSecret}`,
      };

      const response = await axios.post(url, body, { headers });

      if (!response || !response.data) {
        throw new Error('Invalid response from Midtrans API');
      }

      await this.prisma.invoices.update({
        where: {
          cardsId: dto.cardId,
        },
        data: {
          status: String(response.data.transaction_status),
          payments: {
            create: {
              bank: dto.bank,
              amount: gross_amount,
              status: String(response.data.transaction_status),
              midtransTransactionId: String(response.data.transaction_id),
            },
          },
          confirmationPayment: {
            create: {
              amount: gross_amount,
              bank: dto.bank,
            },
          },
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new HttpException(
          error.response?.data || 'Midtrans API error',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      } else if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          error.message || 'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
