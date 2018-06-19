import * as React from 'react';
import * as styles from './style.scss';
import { Header } from 'app/components/Header';
import { Footer } from 'app/components/Footer';

export const Core = (props) => {
  return (
    <section className={styles.page}>
      <Header />
      {props.children}
      <Footer />
    </section>
  );
};
