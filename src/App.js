// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoresPage from './components/StoresPage';
import AddBooking from './components/AddBooking';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StoresPage} />
        <Route path="/add-booking/:storeId" component={AddBooking} />
      </Switch>
    </Router>
  );
}

export default Routes;
