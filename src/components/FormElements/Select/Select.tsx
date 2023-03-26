import React, { Component } from "react";
import { SelectProps } from "./type";

class Select extends Component<SelectProps> {
  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event.target.value);
    }
  };

  render() {
    const { options, value, refObject, className, classNameWrapper, errors, labelName, id } =
      this.props;

    return (
      <fieldset className={classNameWrapper}>
        {labelName && (
          <label className="label" htmlFor={id}>
            {labelName}
          </label>
        )}
        <select className={className} value={value} onChange={this.handleChange} ref={refObject}>
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
  }
}

export default Select;
