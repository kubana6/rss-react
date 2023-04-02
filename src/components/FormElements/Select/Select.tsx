import React, { useCallback } from "react";
import { SelectProps } from "./type";

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  refObject,
  className,
  classNameWrapper,
  errors,
  labelName,
  id,
  onChange,
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange]
  );

  return (
    <fieldset className={classNameWrapper}>
      {labelName && (
        <label className="label" htmlFor={id}>
          {labelName}
        </label>
      )}
      <select className={className} value={value} onChange={handleChange} ref={refObject}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors &&
        errors.map((error) => (
          <span key={error} className="select-error">
            {error}
          </span>
        ))}
    </fieldset>
  );
};
