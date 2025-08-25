export interface TxnParty {
  name: string;
  account: string;
}

export interface TxnI {
  id: string;
  sender: TxnParty;
  receiver: TxnParty;
  amount_with_currency: string;
  amount: number;
  amount_in_base_currency: number;
  fee: number;
  currency: string;
  cause: string;
  sender_caption: string;
  receiver_caption: string;
  created_at_time: number;
  is_topup: boolean;
  is_outgoing_transfer: boolean;
  fee_vat: number;
  fee_before_vat: number;
}
