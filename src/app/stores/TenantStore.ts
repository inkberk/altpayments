import { action, observable } from 'mobx';
import { TenantModel } from 'app/models/TenantModel';

export class TenantStore {
  @observable public tenant: TenantModel;

  @action
  setTenant = (tenant: TenantModel): void => {
    this.tenant = tenant;
  };
}

export default TenantStore;
