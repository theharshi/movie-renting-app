import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class Register extends Form {
  state = {
    data: {
      email: "",
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    email: Joi.string().required().email().label("Email"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("submitted");
  };
  // name should be matched with state.data...

  render() {
    return (
      <main className="container mt-4">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </main>
    );
  }
}

export default Register;
