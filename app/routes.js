/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import App from './containers/App';
import HomePage from 'containers/HomePage';
import Search from 'containers/Search';

const loggedIn = true;

export default () => (
  <Router>
    <App>
      <Switch>

      <Route exact path="/" render={() => (
        loggedIn ? (
          <Redirect to="/dashboard"/>
        ) : (
          <div>
            Hello. I failed
          </div>
        )
      )}/>
        <Route path="/dashboard" component={HomePage} />
        <Route path="/filters" component={Search} />
      </Switch>
    </App>
  </Router>
);
