import React from "react";
import { formFieldHOC } from "../FormFieldHOC";

const InputField = ({ value, onChange, error, name, type, ...rest }) => (
  <React.Fragment>
    <label htmlFor={name}>{name}</label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  </React.Fragment>
);

export const Input = formFieldHOC(InputField);