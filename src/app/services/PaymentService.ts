import {ApiService} from 'app/services/ApiService';
import {Singleton} from 'app/utils/common';
import {API_ENDPOINT} from "app/utils/constants";

export class PaymentService extends Singleton {
  private _apiService: ApiService = ApiService.Instance;

  async getAll(): Promise<any> {
    return await this._apiService.get(API_ENDPOINT.PAYMENT_METHODS).then((data: any) => data.payment_methods);
  }
}