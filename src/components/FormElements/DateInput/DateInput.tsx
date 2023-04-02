import React from "react";
import { DateInputProps } from "./type";
import "./DateInput.scss";

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ value, className, error, id, labelName, classNameWrapper, onChange, onBlur, name }, ref) => {
    return (
      <fieldset className={classNameWrapper}>
        {labelName && (
          <label className="label" htmlFor={id}>
            {labelName}
          </label>
        )}
        <input
          id={id}
          name={name}
          {...(value ? { value } : {})}
          className={`input ${className || ""}`}
          onChange={onChange}
          onBlur={onBlur}
          type="date"
          ref={ref}
        />

        {error && <span className="input-error">{error}</span>}
      </fieldset>
    );
  }
);
