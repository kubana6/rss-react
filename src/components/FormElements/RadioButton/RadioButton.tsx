import React from "react";
import { RadioButtonProps } from "./type";

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ labelName, checked, onChange, classNameWrapper, name, onBlur, value }, ref) => {
    return (
      <label className={classNameWrapper}>
        <input
          name={name}
          type="radio"
          checked={checked}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          id={name}
          value={value}
        />
        {labelName}
      </label>
    );
  }
);
