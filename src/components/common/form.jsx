import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
// import { getGenre } from "../services/fakeGenreService";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.data, this.schema, {
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
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  // renderSelect = (name, label, options, type = "text") => {
  //   console.log("options", options[0]);
  //   const { data, errors } = this.state;
  //   return (
  //     <div className="form-group">
  //       <label htmlFor={name}>{label}</label>
  //       <select
  //         name={name}
  //         id={name}
  //         onChange={this.handleChange}
  //         type={type}
  //         value={data[name]}
  //         className="form-control"
  //       >
  //         <option value="" />
  //         {options.map((option) => (
  //           <option key={option._id} value={option._id}>
  //             {option.name}
  //           </option>
  //         ))}
  //       </select>
  //       {errors[name] && (
  //         <div className="alert alert-danger">{errors[name]} </div>
  //       )}
  //     </div>
  //   );
  // };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()} // it will tell wether the entered properties are valid or not
        type="submit"
        class="btn btn-primary"
      >
        {label}
      </button>
    );
  }
  renderInput = (name, label, type = "text") => {
    return (
      <Input
        onChange={this.handleChange}
        value={this.state.data[name]} // because of this it is empty when we reach this form from add movue whie
        name={name}
        label={label}
        type={type}
        error={this.state.errors[name]}
      ></Input>
    );
  };
  // render() {
  //     return (  );
  // }
}

export default Form;
