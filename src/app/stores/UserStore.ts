import { action, observable } from 'mobx';
import { UserModel } from 'app/models/UserModel';

export class UserStore {
  @observable public user: UserModel;
  @action
  setUser = (user: UserModel): void => {
    this.user = user;
  };

  /*constructor(data: UserModel) {
    this.user = data;
  }*/
}

export default UserStore;
