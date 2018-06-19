/*CORE*/
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router-dom';
/*SERVICE*/
import { UserService } from 'app/services/UserService';
/*COMPONENTS*/
import { AuthRoot } from 'app/containers/Auth/AuthRoot';
import { Form } from 'app/components/Form';
import { Field } from 'app/components/Field';
/*UTILS*/
import { Former, FormField } from 'app/utils/common';
import { DataTypes, FormFieldTypes, ValidatorTypes } from 'app/utils/enums';
import { FIELD_STYLES, LOGIN_MESSAGES, STORE_USER } from 'app/constants';
import * as styles from '../AuthRoot/style.scss';
import { Button } from 'app/components/Button';

const validators = [
  {
    type: ValidatorTypes.MIN,
    value: 6,
    message: LOGIN_MESSAGES.passLength,
    className: FIELD_STYLES.danger
  },
  {
    type: ValidatorTypes.MAX,
    value: 6,
    message: LOGIN_MESSAGES.passLength,
    className: FIELD_STYLES.danger
  }
];

@inject(STORE_USER)
@observer
export class PhoneAuthContainer extends React.Component<
  RouteComponentProps<any>,
  any
> {
  form: Former;
  private _userService: UserService = UserService.Instance;

  constructor(props: any, context: any) {
    super(props, context);
    this.form = new Former(
      {
        code: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          true,
          'code',
          validators
        )
      },
      this.handleSubmit
    );
  }

  handleSubmit = async (data: any) => {
    await this._userService.phoneCheck(
      {
        id: 1,
        code: this.form.fields.code.value
      },
      this.props.history
    );
  };

  render() {
    return (
      <AuthRoot>
        <section>
          <Form {...this.form}>
            <h1>Authentication</h1>
            <p className={styles.message}>
              Secure your account with two factor authentication.
            </p>
            <div className={styles.input_area}>
              <Field {...this.form.fields.code} label={'Authentication code'} />
            </div>
            <div className={styles.button_area}>
              <a href="#">Resend</a>
              <Button type={'submit'} color="blue">
                Verify
              </Button>
            </div>
          </Form>
        </section>
      </AuthRoot>
    );
  }
}
