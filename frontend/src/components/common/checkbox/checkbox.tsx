import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";
import React, { useState } from "react";

interface CheckboxProps {
  name: string;
  // value: string;
  className?: string;
  checkboxVar?: string;
  // checked?: boolean;
  // isChecked: boolean;
  label?: string;
  htmlFor?: string;
  size?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}
const STYLES = {
  primary: " accent-pink-500 w-20 h-5 ",
  secondary: "accent-pink-500 w-20 h-8 ",
  tertiary: "accent-pink-500 w-20 h-11 ",
};

export const Checkbox: React.FC<CheckboxProps> = ({
  className = "border-dashed",
  name,
  // value,
  disabled,
  size = "primary",
  htmlFor,
  label,
  ...restProps
}) => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleIsChecked = () => {
    setIsChecked(!isChecked);
    console.log("yomayo");
  };
  return (
    <div className={clsx(className)}>
      <input
        className={overrideTailwindClasses(
          clsx(
            ` border-2 
            accent-[#50d71e]
            appearance-none
              checked:bg-blue-200 hover:bg-green-hover focus:bg-green-pressed disabled:bg-green-inactive   ${STYLES[size]}`,
            className
          )
        )}
        type="checkbox"
        checked={isChecked}
        onChange={toggleIsChecked}
        id={htmlFor}
        name={name}
        disabled={disabled}
        // size={size}
        value={htmlFor}
        {...restProps}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};
