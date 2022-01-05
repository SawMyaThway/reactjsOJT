import React from "react";
import User from "../users/_index";
import { Route, Switch } from "react-router-dom";
import Employee from "../employees/_employee";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={User}></Route>
        <Route path="/users" component={User}></Route>
        <Route path="/employees" component={Employee}></Route>
      </Switch>
    );
  }
}

export default Routes;
