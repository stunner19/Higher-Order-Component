import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header';
import Resources from './resources';
import Home from './home';
import authenticate from './require_authentication';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/resources' component = {authenticate(Resources)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
