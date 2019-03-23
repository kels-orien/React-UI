import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./Form.scss";

export default class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("submit clicked");
  };
  render() {
    const { buttonText, title } = this.props;
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <h1>{title}</h1>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <Button className="button-one" type="submit">
            {buttonText}
          </Button>
        </form>
      </div>
    );
  }
}

Form.defaultProps = {
  buttonText: "Submit",
  title: "Login"
};

Form.propTypes = {
  buttonText: PropTypes.string,
  title: PropTypes.string
};
