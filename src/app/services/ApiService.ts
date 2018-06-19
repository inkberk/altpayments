import { Singleton } from 'app/utils/common';
import { ApiResponse } from 'app/models/ApiResponse';
import { LocalStorageService } from 'app/services/LocalStorageService';
import { checkToken } from 'app/utils/functions';
import {AlertService} from "app/services/AlertService";

const head = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
};

export class ApiService extends Singleton {
  private _localStorageService: LocalStorageService = LocalStorageService.Instance;
  private _alertService: AlertService = AlertService.Instance;

  public async get(url: string, body: any = null): Promise<ApiResponse> {
    const init: RequestInit = {
      method: 'GET',
      headers: this.initHeaders(),
      mode: 'cors',
      cache: 'default'
    };
    const req: Request = new Request(`${APP_CONFIG.API_URL}${url}`);
    const res: Response = await this.fetch(req, init);

    const resData: ApiResponse = await res.json();
    if (res.status < 400) {
      return resData.data;
    } else {
      console.log(res.status, resData);
      return null;
    }
  }

  public async post(url: string, body: any = null): Promise<any> {
    const init: RequestInit = {
      method: 'POST',
      headers: this.initHeaders(),
      mode: 'cors',
      cache: 'default',
      body: body ? JSON.stringify(body) : ''
    };
    const req: Request = new Request(`${APP_CONFIG.API_URL}${url}`);
    const res: Response = await this.fetch(req, init);

    const resData: ApiResponse = await res.json();
    if (res.status < 400) {
      return resData.data;
    } else {
      // this._alertService.warning(resData.errors.join(','));
      console.log(res.status, resData);
      return null;
    }
  }

  private fetch(input: Request, init?: RequestInit): Promise<Response> {
    return fetch(input, init);
  }

  private initHeaders(): any {
    const headers: Headers = new Headers(head);
    const token = this._localStorageService.get('token');
    // Bearer
    if (token && checkToken(token)) {
      headers.append('Authorization', 'Bearer ' + token);
    }

    return headers;
  }
}

/*body?: any;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    window?: any;*/
