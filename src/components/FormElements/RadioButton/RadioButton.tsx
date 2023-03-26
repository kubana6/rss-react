import React, { Component } from "react";
import { RadioButtonProps } from "./type";

class RadioButton extends Component<RadioButtonProps> {
  render() {
    const { labelName, value, checked, onChange, refObject, classNameWrapper, name } = this.props;

    return (
      <label className={classNameWrapper}>
        <input
          name={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          ref={refObject}
        />
        {labelName}
      </label>
    );
  }
}

export default RadioButton;
