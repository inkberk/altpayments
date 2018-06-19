export class TenantModel {
  id: number;
  name: string;
  upload_path: string;
  logo: string;
  stripe_publishable_key: string;
  paypal_client_id: string | number;
  package: boolean;
  dwolla_client_id: string;
  dwolla_funding_source_name: string;
}
