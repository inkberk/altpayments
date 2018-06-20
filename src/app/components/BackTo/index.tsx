import * as React from 'react';
import * as styles from './index.scss';
import back_to_arrow from '../../../assets/icons/back-to-arrow.svg';

export interface BackToProps {
  children: any
}

const BackTo = (props: BackToProps) => (
  <div className={styles.wrapper}>
    <img src={back_to_arrow} alt="arrow"/>
    <span>Back to</span>&nbsp;<span className={styles.bold}>{props.children}</span>
  </div>
);

export default BackTo;
