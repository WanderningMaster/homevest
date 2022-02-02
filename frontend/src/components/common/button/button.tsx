import React from "react";
import s from './button.module.scss'

interface ButtonProps {
  nameBtn: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  nameBtn,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${s.button} ${s[nameBtn]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
