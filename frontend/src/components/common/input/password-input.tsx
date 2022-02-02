import React, { useState } from 'react';
import clsx from 'clsx';
import { Input, InputProps } from './input';
import { ReactComponent as EyeOpenedIcon } from './eye-opened.svg';
import { ReactComponent as EyeClosedIcon } from './eye-closed.svg';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisivility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const EyeIcon = isPasswordVisible ? EyeOpenedIcon : EyeClosedIcon;

  return <Input
    type={isPasswordVisible ? 'text' : 'password'}
    rightAdornment={<EyeIcon className="absolute inset-y-2 right-2.5" onClick={togglePasswordVisivility} />}
    {...props}
    className={clsx('pr-10', props.className)}
  />;
}