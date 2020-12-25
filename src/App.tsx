import React from 'react';
import AccountPage from 'pages/AccountPage/AccountPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { AuthProvider } from 'common/provider/AuthProvider';
import PrivateRoute from 'common/hocs/PrivateRoute';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Switch>
        <Route path="/signup" render={() => <AccountPage />} />
        <PrivateRoute path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </AuthProvider>
  );
};

export default App;
