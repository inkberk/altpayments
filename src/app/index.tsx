import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {Root} from 'app/containers/Root';
import {LoginContainer} from 'app/containers/Auth/Login';
import {RegisterContainer} from 'app/containers/Auth/Register';
import {MainContainer} from 'app/containers/Main';
import {RecoverContainer} from 'app/containers/Auth/Recover';
import {PhoneAuthContainer} from 'app/containers/Auth/PhoneAuth';
import {CustomersList} from 'app/containers/Customers/CustomersList';
import {ROUTES} from "app/utils/constants";
import {CustomerCreate} from "app/containers/Customers/CustomerCreate";
import {LocalStorageService} from "app/services/LocalStorageService";
import {checkToken} from "app/utils/functions";

const localStorageService = LocalStorageService.Instance;

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}
      />
    )
  )}/>
);

const isAuthenticated = () => {
  const user = localStorageService.get('user');
  const token = localStorageService.get('token');
  return user && token && checkToken(token);
}

// render react DOM
export const App = hot(module)(({history}) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={LoginContainer}/>
        <Route path={ROUTES.REGISTER} component={RegisterContainer}/>
        <Route path={ROUTES.RECOVER} component={RecoverContainer}/>
        <Route path={ROUTES.PHONE_CHECK} component={PhoneAuthContainer}/>
        <PrivateRoute path={ROUTES.CUSTOMER_CREATE} component={CustomerCreate}/>
        <PrivateRoute path={ROUTES.CUSTOMER_LIST} component={CustomersList}/>
        <Route path={ROUTES.MAIN} component={MainContainer}/>
      </Switch>
    </Router>
  </Root>
));
