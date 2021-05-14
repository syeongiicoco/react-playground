// import React, { Component } from "react";

// class PhoneForm extends Component {
//   state = {
//     name: "",
//     phone: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <form>
//         <input
//           name="name"
//           placeholer="이름"
//           onChange={this.handleChange}
//           value={this.state.name}
//         />
//         <input
//           name="phone"
//           onChange={this.handleChange}
//           placeholder="전화번호"
//           value={this.state.phone}
//         />
//       </form>
//     );
//   }
// }

// export default PhoneForm;

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
  }
  state = {
    name: "",
    pw: "",
    color: "red",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  colorChange = (e) => {
    e.preventDefault();
    this.setState({
      color: "green",
    });
    this.props.history.push("/product");
  };

  render() {
    return (
      <form>
        <div>
          <h1>Oggle</h1>
          <div className="header">
            <div className="loginBox">
              <input
                type="text"
                placeholder="이름을 입력하세요"
                className="name"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="password"
                name="pw"
                value={this.state.pw}
                onChange={this.handleChange}
              />
            </div>
            <button
              onClick={this.colorChange}
              className={"login " + this.state.color}
            >
              Login
            </button>
          </div>
          <div>
            {this.state.name}
            {this.state.pw}
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
