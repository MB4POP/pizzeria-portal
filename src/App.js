import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './components/views/HomePage/HomePage';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Waiter from './components/views/Waiter/WaiterContainer';

import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import store from './redux/store';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />

                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBooking} />

                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEvent} />

                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrder} />

              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
