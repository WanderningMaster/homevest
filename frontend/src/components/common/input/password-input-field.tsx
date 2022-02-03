import React from 'react';
import { useField } from "formik";
import { PasswordInput, PasswordInputProps } from "./password-input";

type InputFieldProps = Omit<PasswordInputProps, 'isInvalid' | 'errorText'>;

export const PasswordInputField: React.FC<InputFieldProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return <PasswordInput
    {...field}
    {...rest}
    isInvalid={Boolean(meta.error)}
    errorText={String(meta.error)}
  />;
}