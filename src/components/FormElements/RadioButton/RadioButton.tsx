import React from "react";
import { RadioButtonProps } from "./type";

export const RadioButton: React.FC<RadioButtonProps> = ({
  labelName,
  checked,
  onChange,
  refObject,
  classNameWrapper,
  name,
}) => {
  return (
    <label className={classNameWrapper}>
      <input name={name} type="radio" checked={checked} onChange={onChange} ref={refObject} />
      {labelName}
    </label>
  );
};
