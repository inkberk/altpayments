import * as React from 'react';
import {Link} from 'react-router-dom';
import {STORE_USER} from 'app/constants';
import {inject, observer} from 'mobx-react';
import {ApiService} from 'app/services/ApiService';
import UserStore from 'app/stores/UserStore';
import {ROUTES} from "app/utils/constants";

@inject(STORE_USER)
@observer
export class MainContainer extends React.Component<any, any> {
  private _apiService: ApiService = ApiService.Instance;

  render() {
    const userStore = this.props[STORE_USER] as UserStore;
    return (
      <div style={{padding: '30px'}}>
        <h2>{userStore.user ? userStore.user.name : ''}</h2>
        <ul>
          {Object.keys(ROUTES).map(key => (
            <li key={key}>
              <Link to={ROUTES[key]}>{ROUTES[key]}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
