import React from "react";
import { CheckboxProps } from "./type";
import "./Checkbox.scss";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, className, error, id, labelName, name, onChange, onBlur }, ref) => {
    return (
      <>
        {labelName && (
          <label className="label" htmlFor={id}>
            {labelName}
          </label>
        )}
        <input
          id={id}
          name={name}
          type="checkbox"
          {...(checked ? { checked } : {})}
          className={`input-checkbox ${className || ""}`}
          onChange={onChange}
          ref={ref}
          onBlur={onBlur}
        />
        {error && <span className="input-checkbox-error">{error}</span>}
      </>
    );
  }
);
