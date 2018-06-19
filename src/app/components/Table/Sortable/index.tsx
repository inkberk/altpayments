import * as React from 'react';
import * as styles from './index.scss';

export interface SortableProps {
  children?: any;
  state?: any;
}

export const Sortable = (props: SortableProps) => {
  return (
    <div className={[styles.sortable].join(' ')}>
      <p>{props.children}</p>
      <div className={styles.arrow} />
    </div>
  );
};
