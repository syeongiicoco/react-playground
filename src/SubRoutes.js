import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Product from "./components/Product/Product";

class SubRoutes extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/product" component={Product} />
        </Switch>
      </>
    );
  }
}

export default SubRoutes;
