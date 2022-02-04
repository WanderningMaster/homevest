import React from 'react';
import { useField } from "formik";
import { Select, SelectProps } from "./select";

export const SelectField: React.FC<SelectProps> = ({
  name,
  options,
  ...rest
}) => {
  const [field, state, { setValue }] = useField(name);

  const handleChange = (option: any) => {
    setValue(option.value);
  }

  return <Select
    {...field}
    {...rest}
    value={state.value}
    onChange={handleChange}
    options={options}
  />;
}