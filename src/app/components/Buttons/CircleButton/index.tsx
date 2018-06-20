import * as React from 'react';
import * as styles from './index.scss';

export interface CircleButtonProps {
  children: any;
  icon: any;
  onClick?: any;
}

export const CircleButton = (props: CircleButtonProps) => {
  const onClick = () => {
    !!this.props.onClick && this.props.onClick();
  }
  return (
    <section onClick={onClick} className={styles.button_area}>
      <div className={styles.circle_button}>
        <img src={props.icon} alt="icon" />
      </div>
      <p>{props.children}</p>
    </section>
  );
};
