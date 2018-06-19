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

export class CustomersList extends React.Component<any, any> {
  private _customerService: CustomerService = CustomerService.Instance;

  async componentWillMount() {
    const a = await this._customerService.getAll();
    console.log(a);
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
            {/*<CreateArea name='John' type='customer'/>*/}
            {/*<Pagination/>*/}
          </div>
        </section>
        <Footer/>
      </section>
    );
  }
}
