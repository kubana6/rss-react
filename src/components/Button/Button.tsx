import React from "react";
import "./Button.scss";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
  onClick,
  color = "",
  children,
  type,
  className = "",
  disabled,
}) => {
  const buttonClassName = `button ${className} ${color}`;

  return (
    <button className={buttonClassName} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
