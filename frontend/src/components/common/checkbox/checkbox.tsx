import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";
import React, { useState } from "react";

interface CheckboxProps {
  name?: string;
  className?: string;
  checkboxVar?: string;
  checked?: boolean;
  label?: string;
  htmlFor?: string;
  size?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}
const STYLES = {
  primary: "w-5 h-5",
  secondary: "w-8 h-8",
  tertiary: "w-12 h-12",
};

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  name,
  disabled,
  size = "primary",
  htmlFor,
  label,
  checked = true,
  ...restProps
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleIsChecked = () => {
    setIsChecked(!isChecked);
    console.log("checked");
  };

  return (
    <div className={clsx(className)}>
      <input
        className={overrideTailwindClasses(
          clsx(
            `
        border-light-gray rounded text-green outline-none
        ${STYLES[size]}`,
            className
          )
        )}
        type="checkbox"
        checked={!isChecked}
        onChange={toggleIsChecked}
        id={htmlFor}
        name={name}
        disabled={disabled}
        value={htmlFor}
        {...restProps}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};
