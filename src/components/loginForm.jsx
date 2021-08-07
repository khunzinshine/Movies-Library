import React, { Component } from "react";
import joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted!");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            onChange={this.handleChange}
            value={data.username}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={data.password}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
