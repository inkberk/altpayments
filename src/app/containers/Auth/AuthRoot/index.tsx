import * as React from 'react';
import * as styles from './style.scss';
import AuthHeader from 'app/components/Auth/Header';

export interface AuthRootProps {
  children: React.ReactNode;
}

export class AuthRoot extends React.Component<AuthRootProps, {}> {
  constructor(props: AuthRootProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <section className={styles.page}>
        <AuthHeader />
        {this.props.children}
        {/*<AuthFooter/>*/}
      </section>
    );
  }
}
