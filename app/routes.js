/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';

import HomePage from 'containers/HomePage';
import Search from 'containers/Search';
import Login from 'containers/Login';
import NotFound from 'components/NotFound';

import App from './containers/App';

const loggedIn = true;

export default () => (
  <Router>
    <App>
      <Switch>

      <Route exact path="/" render={() => (
        loggedIn ? (
          <Redirect to="/login" />
        ) : (
          <Redirect to="/dashboard" />
        )
      )}/>

      <Route path="/dashboard" component={HomePage} />
      <Route path="/table" component={Search} />

      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
      </Switch>
    </App>
  </Router>
);
