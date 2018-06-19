export const API_ENDPOINT = {
  LOGIN: 'login',
  REGISTER: 'register',
  PHONE_AUTH: 'phone/verification/verify',
  PHONE_AUTH_RESEND: 'phone/verification/resend',
  PASSWORD_RECOVER: 'password/email',
  PASSWORD_RESET: 'password/reset',

  CUSTOMERS_LIST: 'customers'
};

export const ROUTES = {
  MAIN: '/',
  /*AUTH*/
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/register',
  PHONE_CHECK: '/2fa',
  RECOVER: '/recover',

  CUSTOMERS: '/customers',
  VENDORS: '/vendors',
  QUICK_PAY: '/quick-pay',
  ANALYTICS: '/analytics',
  TRANSACTIONS: '/transactions',

  /*USER*/
  SETTINGS: '/settings',
  /*INFO*/
  UPGRADE: '/upgrade',
  SUPPORT: '/support',
  REFERRALS: '/referrals',
  CONTACT: '/contact',
  PRIVACY: '/privacy',
  TERMS: '/terms'
};

interface MenuItemI {
  path: string;
  title: string
}

export const MAIN_MENU: MenuItemI[] = [
  {path: ROUTES.CUSTOMERS, title: 'Customers'},
  {path: ROUTES.VENDORS, title: 'Vendors'},
  {path: ROUTES.QUICK_PAY, title: 'Quick pay'},
  {path: ROUTES.ANALYTICS, title: 'Analytics'},
  {path: ROUTES.TRANSACTIONS, title: 'Transactions'},
];

export const FOOTER_MENU: MenuItemI[] = [
  {path: ROUTES.UPGRADE, title: 'Upgrade'},
  {path: ROUTES.SUPPORT, title: 'Support'},
  {path: ROUTES.REFERRALS, title: 'Referrals'},
  {path: ROUTES.CONTACT, title: 'Contact Us'},
  {path: ROUTES.PRIVACY, title: 'Privacy Policy'},
  {path: ROUTES.TERMS, title: 'Terms of Service'},
];

export const PATTERNS = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\ *$/,
  WEBSITE: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.([a-z0-9]+\.)?[a-z]+(\/)?(\/[a-zA-Z0-9#]+\/?)*$/i,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!"#$%&'()*+,\-.:;<=>?@\[\\\]^_`{|}~]{8,}$/,
  PHONE: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}?$/,
  NAME: /^[a-zA-Z][\w\s,.:;#@$%&'*+—/=?^`{|}~]*$/,
  DIGIT: /^\d*$/,
  TEXT: /^[a-zA-Z][\w\s.,:]*$/,
  NON_WHITESPACE: /^\S*$/,

};

export const MASKS = {
  PHONE: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  DATE: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
};

export const DATE_FORMAT = 'MM/DD/YYYY';

export const DATE_LOWER = 'mm/dd/yyyy';

export const SERVER_DATE_FORMAT = 'YYYY-MM-DD';

export const IMAGE_MIME_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];