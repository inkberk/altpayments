import * as React from 'react';
import * as styles from './style.scss';

export interface ButtonComponentProps {
  children?: any;
  state?: any;
  size?: any;
  color?: any;
  onClick?: any;
  type?: string;
}

export const Button = (props: ButtonComponentProps) => {
  return (
    <button
      type={props.type || ''}
      className={[
        styles.button,
        styles[props.state],
        styles[props.size],
        styles[props.color]
      ].join(' ')}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
