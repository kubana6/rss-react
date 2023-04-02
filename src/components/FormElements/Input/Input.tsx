import React from "react";
import { InputProps } from "./type";
import "./Input.scss";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, className, error, id, labelName, classNameWrapper, onChange, onBlur, name }, ref) => {
    return (
      <fieldset className={classNameWrapper}>
        {labelName && (
          <label className="label" htmlFor={id}>
            {labelName}
          </label>
        )}
        <input
          name={name}
          id={id}
          {...(value ? { value } : {})}
          className={`input ${className || ""}`}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        {error && <span className="input-error">{error}</span>}
      </fieldset>
    );
  }
);
