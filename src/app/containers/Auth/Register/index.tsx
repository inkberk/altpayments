/*CORE*/
import * as React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
/*SERVICES*/
import {UserService} from 'app/services/UserService';
/*COMPONENTS*/
import {AuthRoot} from 'app/containers/Auth/AuthRoot';
import {Field} from 'app/components/Field';
import {Button} from 'app/components/Button';
import {Form} from 'app/components/Form';
/*UTILS*/
import {FIELD_STYLES, LOGIN_MESSAGES, STORE_USER} from 'app/constants';
import {Former, FormField} from 'app/utils/common';
import {DataTypes, FormFieldTypes, ValidatorTypes} from 'app/utils/enums';
import * as styles from '../AuthRoot/style.scss';
import {ROUTES} from "app/utils/constants";

/*'name' => 'required|max:255',
  'email' => 'required|email|max:255',
  'password' => 'required|min:6',
  'password_confirmation' => 'required|min:6',

  The :attribute field is required.
  The :attribute may not be greater than :max characters.
  The :attribute must be at least :min characters.
  The :attribute must be a valid email address.
  The :attribute has already been taken.
  The :attribute confirmation does not match.*/

const validators = [
  {
    type: ValidatorTypes.MIN,
    value: 6,
    message: LOGIN_MESSAGES.passLength,
    className: FIELD_STYLES.danger
  }
];

@inject(STORE_USER)
@observer
export class RegisterContainer extends React.Component<RouteComponentProps<any>, any> {
  form: Former;

  private _userService = UserService.Instance;

  constructor(props: any, context: any) {
    super(props, context);

    this.form = new Former(
      {
        name: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          true,
          'name'
        ),
        email: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.EMAIL,
          '',
          true,
          'email'
        ),
        password: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.PASSWORD,
          '',
          true,
          'password'
        ),
        password_confirmation: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.PASSWORD,
          '',
          true,
          'password confirm'
        )
      },
      this.handleSubmit
    );
  }

  handleSubmit = async (data: any) => {
    const user = await this._userService.register(
      {
        name: this.form.fields.name.value,
        email: this.form.fields.email.value,
        password: this.form.fields.password.value,
        password_confirmation: this.form.fields.password_confirmation.value
      },
      this.props.history
    );

    this.props[STORE_USER].setUser(user);
    this.props.history.push(ROUTES.CUSTOMER_LIST);
  };

  render() {
    return (
      <AuthRoot>
        <section className={styles.page}>
          <Form {...this.form}>
            <h1>Sign Up</h1>
            <p className={styles.message}>
              Have an account? <Link to={ROUTES.LOGIN}>Log In here</Link>
            </p>
            <div className={styles.input_area}>
              <Field {...this.form.fields.name} label={'Name'}/>
            </div>
            <div className={styles.input_area}>
              <Field {...this.form.fields.email} label={'Email address'}/>
            </div>
            <div className={styles.input_area}>
              <Field {...this.form.fields.password} label={'Password'}/>
            </div>
            <div className={styles.input_area}>
              <Field
                {...this.form.fields.password_confirmation}
                label={'Confirm Password'}
              />
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
