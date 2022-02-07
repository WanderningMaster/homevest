import React, { useState } from 'react';
import clsx from 'clsx';
import { Input } from './input';
import { ReactComponent as EyeOpenedIcon } from './eye-opened.svg';
import { ReactComponent as EyeClosedIcon } from './eye-closed.svg';
import { BaseInputProps } from './types/base-input-props.interface';

export const PasswordInput: React.FC<BaseInputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisivility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const EyeIcon = isPasswordVisible ? EyeOpenedIcon : EyeClosedIcon;

  return <Input
    {...props}
    type={isPasswordVisible ? 'text' : 'password'}
    rightAdornment={<EyeIcon className="absolute inset-y-2 right-2.5" onClick={togglePasswordVisivility} />}
    className={clsx('pr-10', props.className)}
  />;
}