import React, { Component } from "react";
import Detail from "./views/Detail";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMe } from "./store/actions/auth";
import { AuthRoute, PrivateRoute } from "./HOCs/Route";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <AuthRoute path="/signin" component={Signin} redirectPath="/" />
          <AuthRoute path="/signup" component={Signup} redirectPath="/" />

          <PrivateRoute path="/" component={Home} redirectPath="/signin" />
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem("t");
    if (token) this.props.dispatch(fetchMe);
  }
}

export default connect()(App);
