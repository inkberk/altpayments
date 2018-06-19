import { ApiService } from 'app/services/ApiService';
import { Singleton } from 'app/utils/common';
import { UserModel } from 'app/models/UserModel';
import { LocalStorageService } from 'app/services/LocalStorageService';
import { History } from 'history';
import {API_ENDPOINT, ROUTES} from 'app/utils/constants';

export class UserService extends Singleton {
  private _apiService: ApiService = ApiService.Instance;
  private _localStorageService: LocalStorageService = LocalStorageService.Instance;

  async login(data: UserModel, history: History) {
    const res: any = await this._apiService.post(API_ENDPOINT.LOGIN, data);
    const user: UserModel = res.user;
    if (user.enable_2fa) {
      // redirect to 2fa
      history.push(ROUTES.PHONE_CHECK);
      return;
    } else {
      // set token
      this._localStorageService.set('token', res.token);
      this._localStorageService.set('user', user);
      return res.user;
    }
  }

  async register(data: UserModel) {
    const res: any = await this._apiService.post(API_ENDPOINT.REGISTER, data);
    this._localStorageService.set('user', res.user);
    this._localStorageService.set('token', res.token);
    return res.user;
  }

  async phoneCheck(data: any, history: History) {
    const res: any = await this._apiService.post(API_ENDPOINT.PHONE_AUTH, data);
    this._localStorageService.set('token', res.token);
  }

  async recover(data: any, history: History) {
    const res: any = await this._apiService.post(
      API_ENDPOINT.PASSWORD_RECOVER,
      data
    );
    console.log(res);
  }

  logout() {
    this._localStorageService.clear();
  }
}
