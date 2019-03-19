import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
  showLogin() {
    console.log("click login button");
  }
  showRegister() {
    console.log("click Register button");
  }
  showLogout() {
    console.log("click Logout button");
  }
  render() {
    return (
      <div className="main">
        <div className="sub-main">
          <Button onClick={this.showLogin} className="button-one">
            Login
          </Button>
        </div>
        <div className="sub-main">
          <Button onClick={this.showRegister} className="button-two">
            Register
          </Button>
        </div>
        <div className="sub-main">
          <Button onClick={this.showLogout} className="button-three">
            Log out
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
