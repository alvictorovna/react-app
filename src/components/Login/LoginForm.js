import React from "react";
import { withFormHOC } from "../Form/withFormHOC";
import { Input } from "../Form/Input/Input";


const LoginFormComponent = () => (
  <React.Fragment>
    <div>
      <Input
        type="email"
        name="Email"
        validate={v => (v === '' ? "Should be not empty" : null)}
      />
    </div>
    <div>
      <Input
        type="password"
        name="Password"
        validate={v => (v === '' ? "Should be not empty" : null)}
      />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </React.Fragment>
);

export const LoginForm = withFormHOC(LoginFormComponent);
