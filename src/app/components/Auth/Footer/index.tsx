import * as React from 'react';

export interface AuthFooterProps {
  /* empty */
}

export interface AuthFooterState {
  /* empty */
}

export class AuthFooter extends React.Component<
  AuthFooterProps,
  AuthFooterState
> {
  render() {
    return <footer>Footer</footer>;
  }
}

export default AuthFooter;
