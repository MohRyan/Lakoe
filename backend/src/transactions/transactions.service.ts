import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { DetailInvoices } from './entities/transaction.entity';
import { Invoices } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    userId: string,
    items: CreateTransactionDto[],
  ): Promise<Invoices> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { Id: userId },
      });

      if (!user) {
        throw new Error('User not found');
      }

      const products = await Promise.all(
        items.map((item) =>
          this.prisma.products.findFirst({
            where: { Id: item.productId },
          }),
        ),
      );

      // Calculate total price based on item quantity
      const totalPrices = items.reduce((sum, item, index) => {
        const productPrice = products[index]?.price ?? 0;
        return sum + productPrice * item.quantity;
      }, 0);

      // ==================== DEFAULT ====================  //
      const discountRate = 0.1; //  10%
      const serviceCharges = 20000;
      // ==================== DEFAULT ====================  //

      // Calculate final price based on item quantity and discount
      const discountedPrice = totalPrices * (1 - discountRate);
      const finalPrice = discountedPrice + serviceCharges;

      const generateInvoiceNumber = (min = 0, max = 1000000000): string => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num.toString().padStart(6, '0');
      };

      const cards = await this.prisma.cards.create({
        data: {
          prices: finalPrice,
          discount: discountRate * 100,
          user: {
            connect: { Id: userId },
          },
          cardItems: {
            create: items.map((item, index) => ({
              attachments: products[index]?.attachments[0],
              quantity: item.quantity,
              price:
                (products[index]?.price ?? 0) *
                item.quantity *
                (1 - discountRate),
              name: products[index]?.name ?? '',
            })),
          },
          invoices: {
            create: {
              prices: finalPrice,
              serviceCharge: serviceCharges,
              status: 'pending',
              receiverLongitude: -6.402905,
              receiverLatitude: 106.778419,
              receiverAddress:
                'Ruko Citra Lake Sawangan Blok D-01. 15, Jl. Cinangka Raya No.KM. 3, Kedaung',
              receiverDistrict: 'Sawangan, Depok',
              receiverPhone: user.phone,
              receiverName: user.name,
              invoiceNumber: generateInvoiceNumber(),
              histories: {
                create: { status: 'pending' },
              },
            },
          },
          stores: {
            connect: { Id: products[0]?.storeId ?? '' },
          },
        },
      });

      const invoices = await this.prisma.invoices.findFirst({
        where: {
          cardsId: cards.Id,
        },
      });

      return invoices;
    } catch (error) {
      throw new Error('Error while creating cards. Error: ' + error.message);
    }
  }
}
