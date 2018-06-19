/*CORE*/
import * as React from 'react';
import {inject, observer} from "mobx-react";
import * as styles from './index.scss';
import {Link} from 'react-router-dom';
/*SERVICE*/
import {UserService} from 'app/services/UserService';
/*UTILS*/
import {History} from 'history';
import {ROUTES} from "app/utils/constants";
import {STORE_USER} from "app/constants";

import UserStore from "app/stores/UserStore";

export interface ProfileBarProps {
  children?: any;
  photo: any;
  history: History;
}

@inject(STORE_USER)
@observer
class ProfileBar extends React.Component<any, any> {
  private _userService: UserService = UserService.Instance;

  onLogout() {
    this._userService.logout();
    this.props.history.push(ROUTES.LOGIN);
  }

  render() {
    const userStore = this.props[STORE_USER] as UserStore;
    return (
      <section className={styles.profile_bar}>
        <img className={styles.photo} src={this.props.photo} alt="photo"/>
        <label htmlFor="profile" className={styles.profile_select}>
          <p className={styles.name}>{userStore.user ? userStore.user.name : 'empty'}</p>
          <div className={styles.arrow}/>
        </label>
        <div className={styles.drop_area}>
          <div className={styles.settings}>
            <div className={styles.icon}/>
            <Link to={'/settings'}>Settings</Link>
          </div>
          <div className={styles.sign_out}>
            <div className={styles.icon}/>
            <span onClick={this.onLogout}>Sign Out</span>
          </div>
        </div>
      </section>
    );
  }
}

export default ProfileBar;
