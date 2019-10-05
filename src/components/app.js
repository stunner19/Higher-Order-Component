import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}
