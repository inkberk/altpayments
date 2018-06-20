import { action, observable } from 'mobx';
import { UserModel } from 'app/models/UserModel';
import {Singleton} from "app/utils/common";
import {LocalStorageService} from "app/services/LocalStorageService";
import {checkToken} from "app/utils/functions";

export class UserStore extends Singleton {
  private _localStorageService: LocalStorageService = LocalStorageService.Instance;
  @observable public user: UserModel;
  @action
  setUser = (user: UserModel): void => {
    this.user = user;
  };

  constructor() {
    super();
    const user = this._localStorageService.get('user');
    const token = this._localStorageService.get('token');
    if (user && token && checkToken(token)) {
      this.user = user;
    }
    console.log('user store');
  }
}

export default UserStore;
