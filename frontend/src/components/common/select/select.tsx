import clsx from "clsx";
import React from "react";
import ReactSelect, { components } from 'react-select';

import { ReactComponent as ArrowDownIcon } from './arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from './arrow-up.svg';
import { styles } from "./select.styles";

interface Option {
  label: string;
  value: string;
}

type ReactSelectProps = Parameters<ReactSelect>[0];

export interface SelectProps extends ReactSelectProps {
  className?: string;
  name: string;
  options: Option[];
  isSearchable?: boolean;
  placeholder?: string;
}

const IndicatorSeparator = () => null;
const DropdownIndicator: typeof components.DropdownIndicator = (props) => {
  const ArrowIcon = props.selectProps.menuIsOpen ? ArrowUpIcon : ArrowDownIcon;

  return <ArrowIcon className="absolute inset-y-2 right-2.5" />;
}

export const Select: React.FC<SelectProps> = ({ className, name, placeholder, options, ...restProps }) => {
  return (
    <ReactSelect
      className={clsx(className)}
      options={options}
      components={{
        IndicatorSeparator,
        DropdownIndicator,
      }}
      styles={styles}
      isSearchable={false}
      placeholder={placeholder}
      {...restProps}
    />
  );
}