import React, { Component } from "react";
import Input from "./common/input";
import Joi, { abort } from "joi-browser";
class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });

    if (!result.error) {
      return null;
    }
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  // it will be activated when we will be filling the form
  validateProperty = ({ name, value }) => {
    if (name == "username") {
      if (value.trim() === "") {
        return "Username is required..";
      }
    }
    if (name == "password") {
      if (value.trim() === "") {
        return "Password is required..";
      }
      if (value.length <= 5) {
        return "password is too short.. ";
      }
    }
  };
  //this method prevent relaoding of all files again
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(errors);
    if (errors) {
      return;
    }
    console.log("submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  // name should be matched with state.account...
  render() {
    return (
      <main className="container mt-4">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            value={this.state.account.username}
            name="username"
            label="Username"
            type="text"
            error={this.state.errors.username}
          ></Input>
          <Input
            onChange={this.handleChange}
            value={this.state.account.password}
            name="password"
            label="Password"
            type="password"
            error={this.state.errors.password}
          ></Input>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    );
  }
}

export default LoginForm;
