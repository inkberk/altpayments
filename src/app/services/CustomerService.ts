import {ApiService} from 'app/services/ApiService';
import {Singleton} from 'app/utils/common';
import {API_ENDPOINT} from "app/utils/constants";

export class CustomerService extends Singleton {
  private _apiService: ApiService = ApiService.Instance;

  async getAll() {
    const data = {
      limit: 20
    };
    return await this._apiService.get(API_ENDPOINT.CUSTOMERS_LIST);
  }
}


/*
"sortBy": {
  "field": "ASC/DESC"
},
"filters": {
  "status": `integer`-1/0/1,
    "search": `string`
},
"limit": `integer`,
  "offset": `integer`*/
