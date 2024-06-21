// interface/payment.interface.ts
export interface Message {
  cardId: string;
  status: string;
}

export interface ServerToClientEvents {
  paymentData: (data: any) => void;
  paymentUpdate: (message: Message) => void;
}

export interface ClientToServerEvents {
  requestPaymentData: (cardId: string) => void;
}
