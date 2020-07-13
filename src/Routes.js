import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Menu from './containers/Menu';
import Promo from './containers/Promos';
import Order from './containers/Order';
import Dashboard from './containers/Dashboard';
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/parts' component={Menu} />
          <Route path='/promos' component={Promo} />
          <Route path='/contact' component={Order} />
        </Switch>
      </Router>
    );
  }
}
