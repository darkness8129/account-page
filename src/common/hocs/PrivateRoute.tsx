import { AuthContext } from 'common/provider/AuthProvider';
import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

/* This route need to provide protection for some routes
 * redirect to sign-up if user not registered
 */
const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const user = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? <Component {...routeProps} /> : <Redirect to="/signup" />
      }
    />
  );
};

export default PrivateRoute;
