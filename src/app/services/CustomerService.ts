import {ApiService} from 'app/services/ApiService';
import {Singleton} from 'app/utils/common';
import {API_ENDPOINT} from "app/utils/constants";
import {CustomerModel} from "app/models/CustomerModel";

export class CustomerService extends Singleton {
  private _apiService: ApiService = ApiService.Instance;

  async getAll(): Promise<CustomerModel[]> {
    const data = {
      limit: 20
    };
    return await this._apiService.post(API_ENDPOINT.CUSTOMER_LIST).then(data => data.customers);
  }

  async create(data: any): Promise<CustomerModel> {
    return await this._apiService.put(API_ENDPOINT.CUSTOMER_LIST, data).then(data => data.customer);
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
