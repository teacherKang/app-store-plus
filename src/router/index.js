import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import App from '../containers/app';
import Docs from '../containers/docs';
import login from '../login/login';
const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <div className="router-content" style={{width: '100%', height: '100%'}}>
      <Switch>
        <Router path="/login" component={login} ></Router>
        <Router path="/" component={App} >
          <Router exact path="/docs" component={Docs} />
        </Router>
      </Switch>
    </div>
  </BrowserRouter>
);

export default hot(module)(Root);
