import React, { useContext } from 'react';
import AccountPage from 'pages/AccountPage/AccountPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home/Home';
import PrivateRoute from 'common/hocs/PrivateRoute';
import { AuthContext } from 'common/provider/AuthProvider';
import Preloader from 'common/components/Preloader/Preloader';
import GlobalStyles from './GlobalStyles';

const App = () => {
  const { isAuthInitialized } = useContext(AuthContext);

  // while we do not initialized - show preloader
  if (!isAuthInitialized) {
    return <Preloader />;
  }

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
