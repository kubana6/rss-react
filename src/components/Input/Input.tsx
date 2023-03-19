import React, { PureComponent } from "react";
import { InputProps } from "./type";

export class Input extends PureComponent<InputProps> {
  onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  };

  render(): React.ReactNode {
    const { value, className, errors } = this.props;

    return (
      <>
        <input
          value={value}
          className={`input ${className || ""}`}
          onChange={this.onHandleChange}
        />
        {errors &&
          errors.map((error) => (
            <span key={error} className="input-error">
              {error}
            </span>
          ))}
      </>
    );
  }
}
