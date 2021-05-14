import React, { Component } from "react";
import "./Nav.scss";

class nav extends Component {
  handleClick = () => {};
  render() {
    return (
      <div className="hihi">
        <div className="flexNavbar">
          <div className="flexInNavbar">
            <div className="NavBox" onClick={this.handleClick}>
              Home
              <div className="animal">animal</div>
              <div className="animal">dog</div>
              <div className="animal">cat</div>
            </div>
            <div className="NavBox">About</div>
            <div className="NavBox">Product</div>
          </div>
        </div>
      </div>
    );
  }
}

export default nav;
