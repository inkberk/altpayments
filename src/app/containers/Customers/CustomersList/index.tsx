/*CORE*/
import * as React from 'react';
/*COMPONENTS*/
import {Header} from 'app/components/Header';
import {Footer} from 'app/components/Footer';
import {SearchArea} from 'app/containers/Customers/components/SearchList';
import {CircleButton} from 'app/components/Buttons/CircleButton';
/*UTILS*/
import plus from '../../../../assets/icons/plus.svg';
import * as styles from './style.scss';
import {CustomerService} from "app/services/CustomerService";
import CreateArea from "app/components/CreateArea";
import {CustomerModel} from "app/models/CustomerModel";

const data = [
  {
    customer: 'Green Networks',
    ar: <p className={styles.green}>$384,000.00</p>,
    last30days: '$87,940.00',
    last3month: '$5,453.00',
    sales: '$57,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  },
  {
    customer: 'The Happy Rabbit Marketing Company',
    ar: <p className={styles.yellow}>$184,000.00</p>,
    last30days: '$17,940.00',
    last3month: '$1,453.00',
    sales: '$17,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  },
  {
    customer: 'Green Networks',
    ar: <p className={styles.red}>$384,000.00</p>,
    last30days: '$87,940.00',
    last3month: '$5,453.00',
    sales: '$57,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  },
  {
    customer: 'The Happy Rabbit Marketing Company',
    ar: <p className={styles.green}>$184,000.00</p>,
    last30days: '$17,940.00',
    last3month: '$1,453.00',
    sales: '$17,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  },
  {
    customer: 'Green Networks',
    ar: <p className={styles.green}>$384,000.00</p>,
    last30days: '$87,940.00',
    last3month: '$5,453.00',
    sales: '$57,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  },
  {
    customer: 'The Happy Rabbit Marketing Company',
    ar: <p className={styles.green}>$184,000.00</p>,
    last30days: '$17,940.00',
    last3month: '$1,453.00',
    sales: '$17,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  },
  {
    customer: 'Green Networks',
    ar: <p className={styles.green}>$384,000.00</p>,
    last30days: '$87,940.00',
    last3month: '$5,453.00',
    sales: '$57,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  },
  {
    customer: 'The Happy Rabbit Marketing Company',
    ar: <p className={styles.green}>$184,000.00</p>,
    last30days: '$17,940.00',
    last3month: '$1,453.00',
    sales: '$17,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  },
  {
    customer: 'Green Networks',
    ar: <p className={styles.green}>$384,000.00</p>,
    last30days: '$87,940.00',
    last3month: '$5,453.00',
    sales: '$57,293.00',
    message: <div className={styles.mail}/>,
    invoice: <div className={styles.invoice}/>
  }
];

/*const columns = [
    // {
    //     Header: ' ',
    //     accessor: "state",
    //     minWidth: '5px',
    // },
    {

      Header: <Sortable>Customer</Sortable>,
      accessor: "customer",
      minWidth: 24,
      sortable: true,

    },
    {
      Header: <Sortable state='down'>A/R</Sortable>,
      accessor: "ar",
      minWidth: 14,
      headerStyle: {justifyContent: 'flex-end', textAlign: 'center'},
      style: {justifyContent: 'flex-end'},
      sortable: true,
    },
    {
      Header: <Sortable state='down'>Last 30 days</Sortable>,
      accessor: "last30days",
      minWidth: 14,
      headerStyle: {justifyContent: 'flex-end', textAlign: 'center'},
      style: {justifyContent: 'flex-end'},
      sortable: true,
    },
    {
      Header: <Sortable state='down'>Last 3 Month</Sortable>,
      accessor: "last3month",
      minWidth: 14,
      headerStyle: {justifyContent: 'flex-end', textAlign: 'center'},
      style: {justifyContent: 'flex-end'},
      sortable: true,
    },
    {
      Header: <Sortable state='down'>Sales YTD</Sortable>,
      accessor: "sales",
      headerStyle: {justifyContent: 'flex-end', textAlign: 'center'},
      style: {justifyContent: 'flex-end'},
      minWidth: 14,
      sortable: true,
    },
    {
      Header: " ",
      accessor: " ",
      headerStyle: {justifyContent: 'center', textAlign: 'center'},
      style: {justifyContent: 'center'},
      minWidth: 4,
    },
    {
      Header: "Message",
      accessor: "message",
      headerStyle: {justifyContent: 'center', textAlign: 'center'},
      style: {justifyContent: 'center'},
      minWidth: 8,
    },
    {
      Header: "Invoice",
      accessor: "invoice",
      headerStyle: {justifyContent: 'center', textAlign: 'center'},
      style: {justifyContent: 'center'},
      minWidth: 8,
    }
  ];*/

export interface CustomersListState {
  customers: CustomerModel[]
}

export class CustomersList extends React.Component<any, CustomersListState> {
  private _customerService: CustomerService = CustomerService.Instance;
  state = {
    customers: [],
  };

  async componentWillMount() {
    const customers = await this._customerService.getAll();
    this.setState({customers});
  }

  render() {
    return (
      <section className={styles.page}>
        <Header/>
        <section className={styles.list}>
          <header>
            <h1>Customers</h1>
            <SearchArea>Search by Customer</SearchArea>
            <CircleButton icon={plus}>Create Customer</CircleButton>
          </header>
          <div className={styles.table}>
            {/*<Table data={data} columns={columns}/>*/}
            {this.state.customers.length ? (
              <table style={{width: '100%'}}>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>A/R</th>
                    <th>Last 30 Days</th>
                    <th>Last Month</th>
                    <th>Sales YTD</th>
                    <th>Message</th>
                    <th>Invoice</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.customers.map(item => (
                  <tr key={item.id}>
                    <td>{item.business_name}</td>
                    <td>{item.unpaid}</td>
                    <td>{item.days}</td>
                    <td>{item.month}</td>
                    <td>{item.year}</td>
                    <td>Message</td>
                    <td>Invoice</td>
                  </tr>
                ))}
                </tbody>
              </table>
            ) : (
              <CreateArea name='John' type='customer'/>
            )}
            {/*<Pagination/>*/}
          </div>
        </section>
        <Footer/>
      </section>
    );
  }
}
