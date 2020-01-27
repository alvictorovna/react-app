import React from "react";
import { FormContext } from "./withFormHOC";

export const formFieldHOC = WrappedComponent => props => {
  const { name, validate = () => true, ...rest } = props;
  return (
    <FormContext.Consumer>
      {({ values, onChange, setError, errors, inputField, setNotEmptyFields}) => {
        
        const _onChange = ({ target: { value } }) => {
          const error = validate(value);
          onChange(name, value);
          if (error) {
            setError(name, error);
          }
          setNotEmptyFields(name);
        };

        const value = values[name] ? values[name] : "";
        inputField(name);

        return (
          <React.Fragment>
              <WrappedComponent
                name={name}
                value={value}
                onChange={_onChange}
                {...rest}
              />
              {errors[name] && <div className = 'error'>{errors[name]}</div>}
          </React.Fragment>
        );
      }}
    </FormContext.Consumer>
  );
};
