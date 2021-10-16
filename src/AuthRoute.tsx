import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteChildrenProps, RouteProps } from 'react-router';
import { RootState } from './state/root.reducer';

interface AuthRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const AuthRoute = (props: AuthRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const isLogged = user !== null;

  const { component: Component, ...rest } = props;

  if (!isLogged) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  return (
    <Route
      {...rest}
      render={(props: RouteChildrenProps) => <Component {...props} />}
    />
  );
};

export default AuthRoute;
