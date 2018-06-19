import * as React from 'react';
import * as styles from './style.scss';

export interface SearchAreaProps {
  children: any;
}

export const SearchArea = (props: SearchAreaProps) => {
  return (
    <section className={styles.search_area}>
      <input id="search" type="text" placeholder={props.children} />
      <label htmlFor="search" className={styles.icon} />
    </section>
  );
};
