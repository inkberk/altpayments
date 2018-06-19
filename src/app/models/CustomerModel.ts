export class CustomerModel {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  im?: string;
  mobile?: string;
  cust_default_wire?: boolean;
  note?: string;
  paypal_email?: string;
  stripe_email?: string;
  bitcoin_email?: string;

  account_number?: number;
  account_type?: string;
  bitcoin_email?: string;
  business_name?: string;
  business_phone: string;
  days?: number;
  month?: number;
  tenant_id?: number;
  type?: string;
  unpaid?: number;
  url?: string;
  year?: number;
}