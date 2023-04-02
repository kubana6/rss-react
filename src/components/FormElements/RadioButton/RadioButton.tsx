import React, { Component } from "react";
import { RadioButtonProps } from "./type";

class RadioButton extends Component<RadioButtonProps> {
  render() {
    const { labelName, checked, onChange, refObject, classNameWrapper, name } = this.props;

    return (
      <label className={classNameWrapper}>
        <input name={name} type="radio" checked={checked} onChange={onChange} ref={refObject} />
        {labelName}
      </label>
    );
  }
}

export default RadioButton;
