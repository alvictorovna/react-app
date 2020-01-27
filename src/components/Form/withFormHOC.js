import React from "react";
import { values as _values, pickBy } from "lodash";

export const FormContext = React.createContext();

export const withFormHOC = WrappedComponent => {
  
  class Form extends React.Component {
    constructor() {
      super();
      this.state = {
        _form: {
          values: {},
          errors: {},
          onChange: this.onChange,
          setError: this.setError,
          inputField: this.inputField,
          onSubmit: this.onSubmit,
          setNotEmptyFields: this.setNotEmptyFields
        },
        notEmptyFields: []
      };
    }
    

    onSubmit = e => {
      e.preventDefault();
      const {
        _form: { errors, values}, notEmptyFields } = this.state;
        if (!_values(errors).find(item => item) && Object.keys(values).length === notEmptyFields.length) {
          this.props.onSubmit(pickBy(values, v => v));
        }
    };

    setError = (name, error) => {
      this.setState(({ _form }) => ({
        _form: {
          ..._form,
          errors: {
            ..._form.errors,
            [name]: error
          }
        }
      }));
    };

    setNotEmptyFields = (name) => {
      this.setState(({notEmptyFields}) => {
        notEmptyFields = [...notEmptyFields, name];
        return { notEmptyFields: notEmptyFields.filter((item, index) => notEmptyFields.indexOf(item) === index) }
      });
    }

    inputField = name => {
      if (this.state._form.values[name] === undefined) {
        this.setState(({ _form }) => ({
          _form: {
            ..._form,
            values: {
              ..._form.values,
              [name]: ""
            }
          }
        }));
      }
    };

    onChange = (name, value) => {
      this.setState(({ _form }) => ({
        _form: {
          ..._form,
          values: {
            ..._form.values,
            [name]: value
          },
          errors: {
            ..._form.errors,
            [name]: false
          }
        }
      }));
    };

    render() {
      return (
        <FormContext.Provider value={this.state._form}>
          <form onSubmit={this.onSubmit}>
            <WrappedComponent {...this.props} />
          </form>
        </FormContext.Provider>
      );
    }
  }

  return props => <Form {...props} />;
};
