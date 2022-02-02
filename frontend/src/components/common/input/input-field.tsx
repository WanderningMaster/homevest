import React from 'react';
import { useField } from "formik";
import { Input, InputProps } from "./input";

type InputFieldProps = Omit<InputProps, 'isInvalid' | 'errorText'>;

export const InputField: React.FC<InputFieldProps> = ({
  name,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return <Input
    {...field}
    {...rest}
    isInvalid={Boolean(meta.error)}
    errorText={String(meta.error)}
  />;
}