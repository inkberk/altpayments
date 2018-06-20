import * as React from 'react';
import * as styles from './index.scss';
import {Header} from "app/components/Header";
import {Footer} from "app/components/Footer";
import {Former, FormField} from "app/utils/common";
import {DataTypes, FormFieldTypes} from "app/utils/enums";
import {ROUTES} from "app/utils/constants";
import {CustomerService} from "app/services/CustomerService";
import {Field} from "app/components/Field";

import plus from '../../../../assets/icons/plus.svg';
import wire_transfer from '../../../../assets/check-icons/wire_transfer.svg';
import ach from '../../../../assets/check-icons/ach.svg';
import credit_card from '../../../../assets/check-icons/credit-card.svg';
import paypal from '../../../../assets/check-icons/paypal.svg';
import bitcoin from '../../../../assets/check-icons/bitcoin.svg';
import litecoin from '../../../../assets/check-icons/litecoin.svg';
import {CircleButton} from "app/components/Buttons/CircleButton";
import {Button} from "app/components/Button";
import {Link, RouteComponentProps} from "react-router-dom";
import {PaymentService} from "app/services/PaymentService";
import {PaymentMethodModel} from "app/models/PaymentMethodModel";
import {Form} from "app/components/Form";
import BackTo from "app/components/BackTo";

const paymentMethodIcons = {
  wire_transfer,
  ach,
  credit_card,
  paypal,
  bitcoin,
  litecoin
};

export interface CustomerCreateState {
  paymentMethods: PaymentMethodModel[];
  additionalContacts: Former[];
}


export class CustomerCreate extends React.Component<RouteComponentProps<any>, CustomerCreateState> {
  form: Former;

  state = {
    paymentMethods: [],
    additionalContacts: [],
  };

  private _customerService: CustomerService = CustomerService.Instance;
  private _paymentService: PaymentService = PaymentService.Instance;

  constructor(props: any, context: any) {
    super(props, context);

    this.form = new Former(
      {
        business_name: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          true,
          'Company name'
        ),
        url: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.URL,
          '',
          false,
          'URL'
        ),
        city: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'City'
        ),
        zip: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.NUMBER,
          '',
          true,
          'Zip'
        ),
        state: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'State'
        ),
        country: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'Country'
        ),
        address1: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'Address 1'
        ),
        address2: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'Address 2'
        ),
        first_name: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'First Name'
        ),
        last_name: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'Last Name'
        ),
        email: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.EMAIL,
          '',
          true,
          'Email'
        ),
        business_phone: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'Business Phone'
        ),
        mobile: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'Mobile Phone'
        ),
        im: new FormField(
          FormFieldTypes.INPUT,
          DataTypes.TEXT,
          '',
          false,
          'IM'
        )
      },
      this.handleSubmit
    );
  }

  async componentWillMount() {
    const paymentMethods: PaymentMethodModel[] = await this._paymentService.getAll();
    this.setState({paymentMethods: paymentMethods});
  }

  handleSubmit = async () => {

    const data = {
      contact: {
        business_name: this.form.fields.business_name.value,
        email: this.form.fields.email.value,
        first_name: this.form.fields.first_name.value,
        last_name: this.form.fields.last_name.value,
        address:
          {
            address1: this.form.fields.address1.value,
            address2: this.form.fields.address2.value,
            city: this.form.fields.city.value,
            state: this.form.fields.state.value,
            country: this.form.fields.country.value,
            zip: this.form.fields.zip.value
          },
        additional_contacts: [],
        payment_methods: [],
      }
    };

    const res = await this._customerService.create(data);

    console.log(res);

    this.props.history.push(ROUTES.CUSTOMER_LIST);
  };

  addAdditionalContacts() {
    // const form = new Former()
  }

  render() {
    return (
      <section className={styles.customer_page}>
        <Header/>
        <section className={styles.list}>
          <Link to={ROUTES.CUSTOMER_LIST}><BackTo>Customers Page</BackTo></Link>
          <Form {...this.form}>
            <h1>Create Customer</h1>
            <section className={styles.form_section}>
              <h3>Company info</h3>
              <div className={styles.company_form}>
                <Field {...this.form.fields.business_name} />
                <Field {...this.form.fields.url} />
                <Field {...this.form.fields.city} />
                <Field {...this.form.fields.zip} />
                <Field {...this.form.fields.state} />
                <Field {...this.form.fields.country} />
                <Field {...this.form.fields.address1} />
                <Field {...this.form.fields.address2} />
              </div>
            </section>
            <section className={styles.form_section}>
              <h3>Primary Contact</h3>
              <div className={styles.primary_form}>
                <Field {...this.form.fields.first_name} />
                <Field {...this.form.fields.last_name} />
                <Field {...this.form.fields.email} />
                <Field {...this.form.fields.business_phone} />
                <Field {...this.form.fields.mobile} />
                <Field {...this.form.fields.im} />
              </div>
              <CircleButton onClick={this.addAdditionalContacts} icon={plus}>Add Additional Contact</CircleButton>
            </section>
            <section className={styles.form_section}>
              <h3>Payment methods</h3>
              <div className={styles.payment_form}>
                {/*<Checkbox id='select-all'>Select All</Checkbox>*/}
                <div className={styles.check_container}>
                  {!!this.state.paymentMethods.length && this.state.paymentMethods.map((item: PaymentMethodModel) => (
                    <div key={item.id}>
                      <img src={paymentMethodIcons[item.icon]} alt={item.method}/>
                      <span>{item.method}</span>
                    </div>
                  ))}
                  {/*<Checkbox id='wire-transfer'><img src={wt} alt="wt"/> Wire Transfer</Checkbox>
                            <Checkbox id='ach'><img src={ach} alt="ach"/> ACH</Checkbox>
                            <Checkbox id='credit-card'><img src={credit_card} alt="credit-card"/> Credit Card</Checkbox>
                            <Checkbox id='bitcoin'><img src={bitcoin} alt="bitcoin"/> Bitcoin</Checkbox>
                            <Checkbox id='litecoin'><img src={litecoin} alt="litecoin"/> Litecoin</Checkbox>*/}
                </div>
              </div>
            </section>
            <section className={styles.button_container}>
              <Link to={ROUTES.CUSTOMER_LIST}><Button>Cancel</Button></Link>
              <Button type={'submit'} color='blue'>Create Customer</Button>
            </section>
          </Form>
        </section>
        <Footer/>
      </section>
    )
  }
};


