import { User } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  cardId: string;

  @IsNotEmpty()
  @IsString()
  bank: string;

  @IsNotEmpty()
  @IsString()
  courierServiceName: string;
}

// gross_amount, order_id, bank
export const PaymentRequests = (
  gross_amount: number,
  order_id: string,
  bank: string,
  user: User,
) => {
  let payment_type: string = '';
  let bank_transfer: object = {};
  let echannel: object = {};

  if (bank === 'permata') {
    payment_type = 'bank_transfer';
    bank_transfer = {
      bank: 'permata',
      permata: {
        recipient_name: user.name,
      },
    };
  } else if (bank === 'bca') {
    payment_type = 'bank_transfer';
    bank_transfer = {
      bank: 'bca',
      va_number: '111111',
      free_text: {
        inquiry: [{ id: 'Free Text ID', en: 'Free Text EN' }],
        payment: [{ id: 'Free Text ID', en: 'Free Text EN' }],
      },
      bca: {
        sub_company_code: '00000',
      },
    };
  } else if (bank === 'mandiri') {
    payment_type = 'echannel';
    echannel = {
      bill_info1: `Payment For: ${user.name}`,
      bill_info2: 'debt',
      bill_key: `${user.phone}`,
    };
  } else if (bank === 'bni') {
    payment_type = 'bank_transfer';
    bank_transfer = {
      bank: 'bni',
      va_number: '111111',
    };
  } else if (bank === 'bri') {
    payment_type = 'bank_transfer';
    bank_transfer = {
      bank: 'bri',
      va_number: '111111',
    };
  } else if (bank === 'cimb') {
    payment_type = 'bank_transfer';
    bank_transfer = {
      bank: 'cimb',
      va_number: '111111',
    };
  }

  let body: object = {};
  if (bank === 'mandiri') {
    return (body = {
      payment_type: payment_type,
      transaction_details: {
        order_id: order_id,
        gross_amount: gross_amount,
      },
      echannel: echannel,
    });
  } else {
    return (body = {
      payment_type: payment_type,
      transaction_details: {
        order_id: order_id,
        gross_amount: gross_amount,
      },
      bank_transfer: bank_transfer,
    });
  }
};
