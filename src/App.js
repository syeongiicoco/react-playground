import React, { Component } from "react";
import Routes from "./Routes";
// import Login from "./components/Login/Login";
// import Product from "./components/Product/Product";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ["셩이2", "2", "3"],
      count: 1,
    };
  }

  handle = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const arr = [1, 2, 3];
    return <Routes />;
  }
}

export default App;
