import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register}>
        <Register />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
