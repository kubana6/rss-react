import React, { PureComponent } from "react";
import { InputProps } from "./type";
import "./Input.scss";

export class Input extends PureComponent<InputProps> {
  onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.target.value);
    }
  };

  render(): React.ReactNode {
    const { value, className, errors, refObject, id, labelName, classNameWrapper } = this.props;

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
          onChange={this.onHandleChange}
          ref={refObject}
        />
        {errors &&
          errors.map((error) => (
            <span key={error} className="input-error">
              {error}
            </span>
          ))}
      </fieldset>
    );
  }
}
