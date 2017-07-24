/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';

import HomePage from 'containers/HomePage';
import Search from 'containers/Search';
import Login from 'containers/Login';
import User from 'containers/User';
import Tramos from 'containers/Tramos';
import NotFound from 'components/NotFound';
import EnsureLoggedIn from 'containers/EnsureLoggedIn';
import UsersControlPanel from 'containers/UsersControlPanel';


import App from './containers/App';
import Header from './containers/Header';


export default () => (
  <Router>
    <App>
      <Switch>

      <Route exact path="/" render={() => (
          <Redirect to="/dashboard" />
      )}/>

      <Route path="/login" component={Login} />

      <EnsureLoggedIn>
      <Header>
        <Route path="/dashboard" component={HomePage} />
        <Route path="/statistics" component={Search} />
        <Route path="/table" component={Search} />
        <Route path="/tramos" component={Tramos} />
        <Route path="/usuario" component={User} />
        <Route path="/users" component={UsersControlPanel} />
      </Header>
    </EnsureLoggedIn>



      <Route path="*" component={NotFound} />
      </Switch>
    </App>
  </Router>
);
