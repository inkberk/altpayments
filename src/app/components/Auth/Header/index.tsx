import * as React from 'react';
import * as styles from './style.scss';
import logo from '../../../../assets/images/logo.svg';
import {Link} from "react-router-dom";

export const AuthHeader = () => (
  <header className={styles.main_header}>
    <Link to={'/'}>
      <img className={styles.logo} src={logo} alt="logo"/>
    </Link>
  </header>
);

export default AuthHeader;
