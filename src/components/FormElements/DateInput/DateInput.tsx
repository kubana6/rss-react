import React, { useCallback } from "react";
import { DateInputProps } from "./type";
import "./DateInput.scss";

export const DateInput: React.FC<DateInputProps> = ({
  value,
  className,
  errors,
  refObject,
  id,
  labelName,
  classNameWrapper,
  onChange,
}) => {
  const onHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
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
      <input
        id={id}
        {...(value ? { value } : {})}
        className={`input ${className || ""}`}
        onChange={onHandleChange}
        ref={refObject}
        type="date"
      />
      {errors &&
        errors.map((error) => (
          <span key={error} className="input-error">
            {error}
          </span>
        ))}
    </fieldset>
  );
};
