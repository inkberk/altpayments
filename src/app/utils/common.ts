import {DataTypes, FormFieldTypes} from 'app/utils/enums';

export class Singleton {
  private static _instance: any;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}

export class Former {
  fields: any;
  handler: any;
  onSubmit = () => {
    if (Object.keys(this.fields).every((key) => !!this.fields[key])) {
      this.handler();
    }
  };

  constructor(fields: any, handler: any) {
    this.fields = fields;
    this.handler = handler;
  }
}

/*
export const PrivateRoute = ({ component: React.Component, ...rest }) => (
  <Route {...rest} render={(props) => (
  fakeAuth.isAuthenticated === true
    ? <Component {...props} />
: <Redirect to='/login' />
)} />
);*/

export interface FormFieldI {
  type: FormFieldTypes;
  dataType: DataTypes;
  value: any;
  required: boolean;
  placeholder: any;
  validators: any[];
  onChange?: Function;
}

export class FormField implements FormFieldI {
  type: FormFieldTypes;
  dataType: DataTypes;
  value: any;
  required: boolean;
  placeholder: any;
  validators: any[];
  valid: boolean = true;
  onChange = (value: string | number | boolean) => {
    this.value = value;
  };
  setValid = (value) => {
    this.valid = value;
  };

  constructor(type: FormFieldTypes,
              dataType: DataTypes,
              value: any = '',
              required: boolean = false,
              placeholder: any = '',
              validators: any[] = []) {
    this.type = type;
    this.dataType = dataType;
    this.value = value;
    this.required = required;
    this.placeholder = placeholder;
    this.validators = validators;
  }
}
