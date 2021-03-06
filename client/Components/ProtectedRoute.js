import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = ({ username: username, component: Component, ...rest }) => {
  console.log(rest)
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} username = {username}/>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute