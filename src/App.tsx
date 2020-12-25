import React from 'react';
import AccountPage from 'pages/AccountPage/AccountPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { AuthProvider } from 'common/provider/AuthProvider';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Switch>
        <Route path="/signup" render={() => <AccountPage />} />
        <Route path="/home" render={() => <Home />} />
        <Redirect exact from="/" to="/home" />
        <Redirect to="/home" />
      </Switch>
    </AuthProvider>
  );
};

export default App;
