/*CORE*/
import * as React from 'react';
/*UTILS*/
import { DataTypes, FormFieldTypes, ValidatorTypes } from '../../utils/enums';
import * as styles from './style.scss';
import { FormFieldI } from 'app/utils/common';

export class FieldProps implements FormFieldI {
  type: FormFieldTypes;
  dataType: DataTypes;
  value: any;
  required: boolean;
  placeholder: any;
  validators: any[];
  onChange?: Function;
  setValid?: Function;
  label?: string;

  constructor(
    type: FormFieldTypes,
    dataType: DataTypes = null,
    value: any = null,
    required: boolean = false,
    placeholder: any = '',
    validators: any[] = [],
    label: string = ''
  ) {
    this.dataType = dataType;
    this.value = value;
    this.required = required;
    this.placeholder = placeholder;
    this.validators = validators;
    this.label = label;
  }
}

export interface FormFieldState {
  value: any;
  valid: boolean;
}

export class Field extends React.Component<FieldProps, FormFieldState> {
  messages: any[] = [];

  constructor(props: any) {
    super(props);
    this.state = {
      value: this.props.value,
      valid: true
    };
  }

  onFocus() {
    console.log('focus');
  }

  onBlur = () => {
    if (!this.props.validators.length) return;

    this.messages = [];

    this.props.validators.forEach((validator) => {
      let isValid: boolean;
      switch (validator.type) {
        case ValidatorTypes.MIN:
          isValid = this.state.value.length >= validator.value;
          break;
        case ValidatorTypes.MAX:
          isValid = this.state.value.length <= validator.value;
          break;
        case ValidatorTypes.REGEX:
          isValid = validator.value.test(this.state.value);
          break;
        default:
          isValid = true;
      }
      if (!isValid) this.messages.push(validator);
    });

    this.setState({ valid: !this.messages.length });
    this.props.setValid(!this.messages.length);
  };

  onChange(value: any) {
    this.setState({ value: value });
    this.props.onChange(value);
  }

  getMessageList() {
    return this.messages.map((item) => (
      <li key={item.message}>{item.message}</li>
    ));
  }

  getClassList(): string {
    return this.messages.map((item) => item.className).join(' ');
  }

  render() {
    switch (this.props.type) {
      case FormFieldTypes.INPUT:
        return (
          <div className={styles.wrapper + ' valid'}>
            <input
              type={this.props.dataType}
              value={this.state.value}
              placeholder={this.props.placeholder}
              required={this.props.required}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={(event) => this.onChange(event.target.value)}
              className={!this.state.valid ? this.getClassList() : ''}
            />
            <label>{this.props.label}</label>
            {!this.state.valid && (
              <div className={styles.invalid_block}>
                {/*<p>{props.invalid_info}</p>*/}
                <ul>{this.getMessageList()}</ul>
              </div>
            )}
          </div>
        );
      case FormFieldTypes.CHECKBOX:
        return (
          <section className={[styles.checkbox].join(' ')}>
            <input
              type="checkbox"
              onChange={() => this.onChange(!this.state.value)}
              checked={this.state.value}
            />
            {/*<label>{this.props.label}</label>*/}
          </section>
          /*<input type="checkbox" checked={this.state.value} onChange={() => this.onChange(!this.state.value)}/>*/
        );
      default:
        return null;
    }
  }
}
