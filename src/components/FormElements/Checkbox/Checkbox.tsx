import React, { useCallback } from "react";
import { CheckboxProps } from "./type";
import "./Checkbox.scss";

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  className,
  errors,
  refObject,
  id,
  labelName,
  name,
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
        onChange={onHandleChange}
        ref={refObject}
      />
      {errors &&
        errors.map((error) => (
          <span key={error} className="input-checkbox-error">
            {error}
          </span>
        ))}
    </>
  );
};
