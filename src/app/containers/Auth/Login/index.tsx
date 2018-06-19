/*CORE*/
import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
/*SERVICES*/
import { UserService } from 'app/services/UserService';
/*COMPONENTS*/
import { AuthRoot } from 'app/containers/Auth/AuthRoot';
import { Form } from 'app/components/Form';
import { Field } from 'app/components/Field';
/*UTILS*/
import * as styles from '../AuthRoot/style.scss';
import { DataTypes, FormFieldTypes, ValidatorTypes } from 'app/utils/enums';
import {
  FIELD_STYLES,
  LOGIN_MESSAGES,
  PASSWORD_REGEX,
  STORE_USER
} from 'app/constants';
import { Former, FormField } from 'app/utils/common';
import { Button } from 'app/components/Button';
import {ROUTES} from "app/utils/constants";

const validators = [
  {
    type: ValidatorTypes.MIN,
    value: 8,
    message: LOGIN_MESSAGES.passLength,
    className: FIELD_STYLES.danger
  },
  {
    type: ValidatorTypes.MAX,
    value: 16,
    message: LOGIN_MESSAGES.passLength,
    className: FIELD_STYLES.danger
  },
  {
    type: ValidatorTypes.REGEX,
    value: PASSWORD_REGEX,
    message: LOGIN_MESSAGES.passMatch,
    className: FIELD_STYLES.warning
  }
];

export interface LoginProps extends RouteComponentProps<any> {}

export interface LoginState {
  email: string;
  password: string;
  remember: boolean;
}

@inject(STORE_USER)
@observer
export class LoginContainer extends React.Component<LoginProps, LoginState> {
  form: Former;
  private _userService: UserService = UserService.Instance;

  constructor(props: LoginProps, context: any) {
    super(props, context);
    this.state = {
      email: '',
      password: '',
      remember: false
    };

    this.form = new Former(
      {
        email: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.EMAIL,
          '',
          true,
          'name',
          validators
        ),
        password: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.PASSWORD,
          '',
          true,
          'password',
          validators
        ),
        remember: new FormField(FormFieldTypes.CHECKBOX, null, false)
      },
      this.handleSubmit
    );
  }

  handleSubmit = async (data: any) => {
    const user = await this._userService.login(
      {
        email: this.form.fields.email.value,
        password: this.form.fields.password.value,
        remember: this.form.fields.remember.value
      },
      this.props.history
    );

    this.props[STORE_USER].setUser(user);
    this.props.history.push(ROUTES.CUSTOMERS);
  };

  render() {
    return (
      <AuthRoot>
        <section className={styles.page}>
          <Form {...this.form}>
            <h1>Log In</h1>
            <p className={styles.message}>
              Don’t have an account? <Link to={ROUTES.REGISTER}>Sign Up</Link>
            </p>
            <div className={styles.input_area}>
              <Field {...this.form.fields.email} label={'Email address'} />
            </div>
            <div className={styles.input_area}>
              <Field {...this.form.fields.password} label={'Password'} />
            </div>
            <div className={styles.options}>
              <div className={styles.remember_area}>
                <Field {...this.form.fields.remember} />
                <label className={styles.text}>Remember me</label>
              </div>
              <Link to={ROUTES.RECOVER}>Forgot password</Link>
            </div>
            <div className={styles.button_area}>
              <Button type={'submit'} color="blue">
                Sign Up
              </Button>
            </div>
          </Form>
        </section>
      </AuthRoot>
    );
  }
}
