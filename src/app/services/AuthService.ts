import { ApiService } from 'app/services/ApiService';
import { Singleton } from 'app/utils/common';
import { UserModel } from 'app/models/UserModel';
import { LocalStorageService } from 'app/services/LocalStorageService';
import { UserService } from 'app/services/UserService';

export class AuthService extends Singleton {
  private _apiService: ApiService = ApiService.Instance;
  private _userService: UserService = UserService.Instance;
  private _localStorageService: LocalStorageService = LocalStorageService.Instance;

  async login(data: UserModel) {
    return await this._apiService.post('login', data).then((res: any) => {
      console.log('res', res);
      this._localStorageService.set('user', res.user);
      return res.user;
    });
  }

  async register(data: UserModel) {
    return await this._apiService.post('register', data).then((res: any) => {
      console.log('res', res);
      this._localStorageService.set('user', res.user);
      return res.user;
    });
  }

  logout() {
    this._localStorageService.clear();
  }
}
