export class UserModel {
  created_at?: string;
  email: string;
  enable_2fa?: boolean;
  id?: number;
  name?: string;
  phone?: string;
  phone_validated?: boolean;
  role_id?: number;
  tenant_id?: number;
  tenant_role?: string;
  tenant_role_id?: number;
  updated_at?: string;
  verification_token?: string;
  verified?: boolean;
  password?: string;
  remember?: boolean;

  constructor(name: string) {
    this.name = name;
  }
}
