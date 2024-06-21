import { HttpException, HttpStatus, OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import axios from 'axios';
import { Server } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';

@WebSocketGateway({
  cors: {
    origin: true,
  },
})
export class PaymentsGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  constructor(private readonly prisma: PrismaService) {}

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Connected with socket id: ', socket.id);

      this.getPaymentConfirmation()
        .then((data) => {
          socket.emit('onMessage', data);
        })
        .catch((error) => {
          console.error('Error fetching initial payment confirmation:', error);
        });
    });

    // this.startPolling();
  }

  async getPaymentConfirmation(): Promise<any> {
    const cardId = '0b241e26-4236-4422-803f-88873a85669e';
    try {
      const secret = process.env.MIDTRANS_SERVER_KEY;
      const encodedSecret = Buffer.from(secret).toString('base64');

      const url = `${process.env.MIDTRANS_BASE_URL}/v2/${cardId}/status`;
      const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Basic ${encodedSecret}`,
      };

      const response = await axios.get(url, { headers });

      if (String(response.data.transaction_status) === 'settlement') {
        await this.prisma.invoices.update({
          where: { cardsId: cardId },
          data: {
            status: String(response.data.transaction_status),
            payments: {
              update: {
                status: String(response.data.transaction_status),
              },
            },
          },
        });
      }

      // Emit the response data to the 'newMessage' event
      this.onNewMessage(response.data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
        throw new HttpException(
          error.response?.data || 'Midtrans API error',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      } else if (error instanceof HttpException) {
        console.error('HTTP exception:', error.message);
        throw error;
      } else {
        console.error('Unexpected error:', error.message);
        throw new HttpException(
          error.message || 'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  // startPolling() {
  //   setInterval(async () => {
  //     try {
  //       const data = await this.getPaymentConfirmation();
  //       this.server.emit('onMessage', data);
  //     } catch (error) {
  //       console.error('Error during polling:', error);
  //     }
  //   }, 30000);
  // }

  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any) {
    this.server.emit('onMessage', {
      content: body,
    });
  }
}
