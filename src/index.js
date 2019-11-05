import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store';

import Index from './pages/Index';
import Cart from './pages/Cart';
import Order from './pages/Order';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <Index />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
    </Router>
  </Provider>,
document.getElementById('root'));