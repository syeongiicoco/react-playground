import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubRoutes from "./SubRoutes";
import Login from "./components/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={SubRoutes} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
