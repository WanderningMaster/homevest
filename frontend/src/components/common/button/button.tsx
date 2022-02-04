import React, { ReactNode } from "react";
import "assets/styles/tailwind.css";
import "assets/styles/fonts.css";
interface ButtonProps {
  label?: string;
  icon?: ReactNode | HTMLAllCollection | string;
  nameBtn?: "primary" | "secondary" | "tertiary" | "google";
  disabled?: boolean;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  [key: string]: any;
}

const STYLES = {
  primary:
    "text-white bg-green border-solid border-1 border-green hover:bg-green-hover focus:bg-green-pressed disabled:bg-green-inactive",
  secondary:
    "text-green border-solid border-1 border-green hover:border-green-hover focus:border-green-pressed disabled:border-green-inactive",
  tertiary: "text-green border-none focus:text-green-pressed ",
  google: "text-green bg-white shadow-[0_4px_18px_rgba(0,0,0,0.1)]",
};

const Button: React.FC<ButtonProps> = ({
  label="",
  nameBtn='primary',
  disabled,
  type="button",
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-154 h-57 text-black font-medium text-base text-center bg-white box-border rounded-lg px-2 py-15 transition duration-200 ${STYLES[nameBtn]}`}
      {...props}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;
