import React from 'react';
import AccountPage from 'pages/AccountPage/AccountPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignOut from 'pages/SignOutPage/SignOut';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/signup" render={() => <AccountPage />} />
        <Route path="/signout" render={() => <SignOut />} />
        <Redirect exact from="/" to="/signup" />
      </Switch>
    </>
  );
};

export default App;
