import React from "react";
import { Route, Redirect } from "react-router-dom";

const RestrictedRoute = ({
  component: Component,
  authenticated,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default RestrictedRoute;
