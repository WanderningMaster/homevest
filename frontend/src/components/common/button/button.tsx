import React, { ReactNode } from "react";
import clsx from 'clsx';
import "assets/styles/tailwind.css";
import "assets/styles/fonts.css";
import { ReactComponent as GoogleIcon } from "./icon-google.svg";
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
    "text-white bg-green border-solid border border-green hover:bg-green-hover focus:bg-green-pressed disabled:bg-green-inactive",
  secondary:
    "text-green border-solid border border-green hover:border-green-hover focus:border-green-pressed disabled:border-green-inactive",
  tertiary: "text-green border-none focus:text-green-pressed ",
  google: "text-green bg-white shadow-md",
};


const Button: React.FC<ButtonProps> = ({
  className,
  label = "",
  nameBtn = "primary",
  disabled,
  type = "button",
  children,
  icon,
  onClick,
  ...props
}) => {
  // const getIcon=nameBtn==="google"?GoogleIcon:
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        className, `flex justify-around items-center w-40 h-12 text-black font-medium text-base text-center bg-white box-border rounded-lg px-2 py-4 transition duration-200 ${STYLES[nameBtn]}`)}
      {...props}
    >
      {nameBtn==="google"? <GoogleIcon className="w-5 h-5"/>:icon}
      {label}
      {children}
    </button>
  );
};

export default Button;
