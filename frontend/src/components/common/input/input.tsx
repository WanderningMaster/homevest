import clsx from 'clsx';
import React from "react";
import { Typography } from "../typography/typography";
import { BaseInputProps } from './types/base-input-props.interface';
import { InputProps } from './types/input-props.interface';

export const Input: React.FC<InputProps> = ({
  className,
  name,
  disabled,
  placeholder,
  isInvalid,
  errorText,
  type,
  rightAdornment,
  ...restHTMLProps
}) => {
  return (
    <div className="relative flex flex-col w-64">
      <input className={clsx(
        className,
        'text-line-14 leading-line-14',
        'h-9 rounded border outline-none p-2.5',
        'focus:border-green focus:text-green',
        'placeholder-light-grey',
        'hover:border-light-blue', {
        'bg-light-grey border-none text-grey': disabled,
        'border-grey': !isInvalid,
        'border-red': isInvalid
      })} name={name} type={type} disabled={disabled} placeholder={placeholder} {...restHTMLProps} />
      {rightAdornment}
      {isInvalid && errorText && (
        <Typography type="placeholder-small" className="text-red mt-1">{errorText}</Typography>
      )}
    </div>
  );
};

