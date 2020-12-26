import React from 'react';
import AccountPage from 'pages/AccountPage/AccountPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home/Home';
import PrivateRoute from 'common/hocs/PrivateRoute';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/signup" render={() => <AccountPage />} />
        <PrivateRoute path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default App;
