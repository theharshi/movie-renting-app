import React, { Component } from "react";

const Input = ({ name, label, value, onChange, type, error }) => {
  return (
    <div class="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        // autoFocus
        type={type}
        name={name}
        id={label}
        class="form-control"
        aria-describedby="emailHelp"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
