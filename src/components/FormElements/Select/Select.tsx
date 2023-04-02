import React from "react";
import { SelectProps } from "./type";

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, value, className, classNameWrapper, error, labelName, id, onChange, name }, ref) => {
    return (
      <fieldset className={classNameWrapper}>
        {labelName && (
          <label className="label" htmlFor={id}>
            {labelName}
          </label>
        )}
        <select className={className} value={value} onChange={onChange} name={name} ref={ref}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="select-error">{error}</span>}
      </fieldset>
    );
  }
);
