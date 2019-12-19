import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './components/views/HomePage/HomePage';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Waiter from './components/views/Waiter/Waiter';

import TablesBookingInfo from './components/views/TablesBookingInfo/TablesBookingInfo';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsInfo from './components/views/TablesEventsInfo/TablesEventsInfo';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import WaiterOrderInfo from './components/views/WaiterOrderInfo/WaiterOrderInfo';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
        </Switch>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/tables/booking/book/:id'} component={TablesBookingInfo} />
          <Route path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew}/>
          <Route path={process.env.PUBLIC_URL + '/tables/events/event/:id'} component={TablesEventsInfo} />
          <Route path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
          <Route path={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'} component={WaiterOrderInfo} />
          <Route path={process.env.PUBLIC_URL + '/waiter/ordering/new'} component={WaiterOrderNew} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
