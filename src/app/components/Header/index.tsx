/*CORE*/
import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';
/*COMPONENTS*/
import ProfileBar from 'app/components/ProfileBar';
/*UTILS*/
import * as styles from './style.scss';
import logo from '../../../assets/images/logo.svg';
import photo from '../../../assets/images/photo.png';
import {MAIN_MENU, ROUTES} from "app/utils/constants";

export const Header = () => {
  return (
    <header className={styles.main_header}>
      <Link to={ROUTES.MAIN}>
        <img className={styles.logo} src={logo} alt="altpayments"/>
      </Link>
      <div className={styles.nav_bar}>
        {MAIN_MENU.map(item => (
          <NavLink
            className={styles.link}
            to={item.path}
            activeClassName={styles.active}
            key={item.title}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <ProfileBar photo={photo}/>
      <input type="checkbox" id="dashboard"/>
      <div className={styles.dashboard_area}>
        <div className={styles.dashboard}>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
        </div>
        <label htmlFor="dashboard" className={styles.open_dashboard}>
          <div className={styles.icon}/>
          <p>Open Dashboard</p>
        </label>
      </div>
    </header>
  );
};
