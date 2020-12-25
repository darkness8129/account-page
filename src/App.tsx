import React, { useContext } from 'react';
import AccountPage from 'pages/AccountPage/AccountPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { AuthContext } from 'common/provider/AuthProvider';
import PrivateRoute from 'common/hocs/PrivateRoute';
import Preloader from 'common/components/Preloader/Preloader';
import GlobalStyles from './GlobalStyles';

const App = () => {
  const user = useContext(AuthContext);
  if (!user) {
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
