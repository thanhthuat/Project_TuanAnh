import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const createRoute = (condition) => {
  return class extends Component {
    render() {
      const { path, component: RouteComp, redirectPath } = this.props;
      return (
        <Route
          path={path}
          render={(routeProps) => {
            if (condition()) {
              return <RouteComp {...routeProps} />;
            }
            return <Redirect to={redirectPath} />;
          }}
        />
      );
    }
  };
};

export const AuthRoute = createRoute(() => !localStorage.getItem("t"));
export const PrivateRoute = createRoute(() => localStorage.getItem("t"));
