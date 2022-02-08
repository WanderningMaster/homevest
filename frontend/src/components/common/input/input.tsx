import clsx from 'clsx';
import React from "react";
import { Typography } from "../typography/typography";
import { InputProps } from './types/input-props.interface';

export const Input: React.FC<InputProps> = ({
  className,
  classes,
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
    <div className={clsx('relative flex flex-col w-64', classes?.container, className)}>
      <input className={clsx(
        classes?.input,
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
        <Typography type="placeholder-small" className={clsx("text-red mt-1", classes?.error)}>{errorText}</Typography>
      )}
    </div>
  );
};

