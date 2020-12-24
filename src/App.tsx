import React from 'react';
import AccountPage from 'pages/AccountPage/AccountPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignOut from 'pages/SignOutPage/SignOut';
import { AuthProvider } from 'common/provider/AuthProvider';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Switch>
        <Route path="/signup" render={() => <AccountPage />} />
        <Route path="/signout" render={() => <SignOut />} />
        <Redirect exact from="/" to="/signup" />
      </Switch>
    </AuthProvider>
  );
};

export default App;
