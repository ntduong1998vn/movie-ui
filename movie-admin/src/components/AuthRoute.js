import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isDemo } from "./../constants/defaultValues";

export const AuthRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser || isDemo ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/user/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
