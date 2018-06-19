import * as React from 'react';
import * as styles from './index.scss';

export interface CircleButtonProps {
  children: any;
  icon: any;
}

export const CircleButton = (props: CircleButtonProps) => {
  return (
    <section className={styles.button_area}>
      <div className={styles.circle_button}>
        <img src={props.icon} alt="icon" />
      </div>
      <p>{props.children}</p>
    </section>
  );
};
