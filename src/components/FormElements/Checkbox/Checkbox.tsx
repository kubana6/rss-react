import React, { PureComponent } from "react";
import { InputProps } from "./type";
import "./Checkbox.scss";

export class Checkbox extends PureComponent<InputProps> {
  onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.target.value);
    }
  };

  render(): React.ReactNode {
    const { checked, className, errors, refObject, id, labelName, name } = this.props;

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
          onChange={this.onHandleChange}
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
  }
}
