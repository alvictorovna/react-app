import React from "react";
import { withFormHOC } from "../Form/withFormHOC";
import { Input } from "../Form/Input/Input";
import './Card.modules.scss';

const CardFormComponent = () => (
  <React.Fragment>
    <div>
      <Input
        type="number"
        name="price"
        validate={v => (v === '' ? "Should be not empty" : null)}
      />
    </div>
    <div>
      <Input
        type="text"
        name="title"
        validate={v => (v === '' ? "Should be not empty" : null)}
      />
    </div>
    <div>
      <Input
        type="text"
        name="imgPath"
        validate={v => (v === '' ? "Should be not empty" : null)}
      />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </React.Fragment>
);

export const CardForm = withFormHOC(CardFormComponent);
