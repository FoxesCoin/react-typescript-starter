import { ComponentType, ReactNode } from 'react';
import { Redirect, Route, RouteComponentProps, StaticContext } from 'react-router';

import { ROUTES } from 'constants/router';

import { TComponent } from 'typings/react';

interface IPrivateRouteProps {
  path: string;
  component?:
    | ComponentType<any>
    | ComponentType<RouteComponentProps<any, StaticContext, unknown>>;
  children?: ReactNode;
  redirect?: string;
}

const REDIRECT_ROUTES = ROUTES.START;

export const PrivateRoute: TComponent<IPrivateRouteProps> = (props) => {
  const { children, path, component, redirect } = props;
  const isCanOpenPrivateRoute = true;

  if (!isCanOpenPrivateRoute) {
    return <Redirect to={redirect ?? REDIRECT_ROUTES} />;
  }

  return (
    <Route path={path} component={component}>
      {children}
    </Route>
  );
};
