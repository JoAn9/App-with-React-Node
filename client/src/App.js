import React, { Fragment, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <SnackbarProvider hideIconVariant preventDuplicate>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
