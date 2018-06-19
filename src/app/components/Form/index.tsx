import * as React from 'react';

export interface FormProps {
  onSubmit: any;
}

export class Form extends React.Component<FormProps, any> {
  onSubmit = (event: any) => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return <form onSubmit={this.onSubmit}>{this.props.children}</form>;
  }
}
