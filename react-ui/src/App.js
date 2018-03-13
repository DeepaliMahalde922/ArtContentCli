// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import About from './containers/About';
import ProductsPage from './containers/ProductsPage';
import Review from './containers/Review';

const App = () =>
  <div>
    <Route exact path="/" component={ProductsPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/review" component={Review} />
  </div>;

export default App;
