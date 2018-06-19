/*CORE*/
import * as React from 'react';
import {Link} from "react-router-dom";
/*UTILS*/
import * as styles from './style.scss';
import logo from '../../../assets/images/logo.svg';
import {FOOTER_MENU} from "app/utils/constants";

export const Footer = () => (
  <footer className={styles.main_footer}>
    <img className={styles.logo} src={logo} alt="altpayments"/>
    <div className={styles.nav_bar}>
      {FOOTER_MENU.map(item => (
        <Link key={item.path} className={styles.links} to={item.path}>{item.title}</Link>
      ))}
    </div>
  </footer>
);
