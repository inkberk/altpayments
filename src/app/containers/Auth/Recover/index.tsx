/*CORE*/
import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
/*SERVICES*/
import {UserService} from 'app/services/UserService';
/*COMPONENTS*/
import {AuthRoot} from 'app/containers/Auth/AuthRoot';
import {Form} from 'app/components/Form';
import {Field} from 'app/components/Field';
import {Button} from 'app/components/Button';
/*UTILS*/
import {Former, FormField} from 'app/utils/common';
import {DataTypes, FormFieldTypes} from 'app/utils/enums';
import * as styles from '../AuthRoot/style.scss';

export class RecoverContainer extends React.Component<RouteComponentProps<any>, any> {
  form: Former;
  private _userService: UserService = UserService.Instance;

  constructor(props: any, context: any) {
    super(props, context);
    this.form = new Former(
      {
        email: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.EMAIL,
          '',
          true,
          'email'
        )
      },
      this.handleSubmit
    );
  }

  handleSubmit = async (data: any) => {
    const user = await this._userService.recover(
      {
        email: this.form.fields.email.value
      },
      this.props.history
    );
  };

  render() {
    return (
      <AuthRoot>
        <section className={styles.page}>
          <Form {...this.form}>
            <h1>Reset Password</h1>
            <p className={styles.message}>
              Provide your email and we will send you a reset link
            </p>
            <div className={styles.input_area}>
              <Field {...this.form.fields.email} label={'Email address'}/>
            </div>
            <div className={styles.button_area}>
              <Button type={'submit'} color="blue">
                Reset
              </Button>
            </div>
          </Form>
        </section>
      </AuthRoot>
    );
  }
}
