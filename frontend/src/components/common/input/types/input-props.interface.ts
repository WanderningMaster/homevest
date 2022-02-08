import { BaseInputProps } from "./base-input-props.interface";

export interface InputProps extends BaseInputProps {
  type?: 'text' | 'email' | 'password';
  rightAdornment?: React.ReactNode;
}