import clsx from "clsx";
import { mapValues } from "lodash";
import React from "react";
import ReactSelect, { components } from 'react-select';

import { ReactComponent as ArrowDownIcon } from './arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from './arrow-up.svg';
import { styles } from "./select.styles";
import { SelectClassSelectors } from "./types/select-class-selectors";

interface Option {
  label: string;
  value: string;
}
interface BaseProps {
  className: string;
}

type ReactSelectProps = Parameters<ReactSelect>[0];
export interface SelectProps extends ReactSelectProps {
  className?: string;
  name: string;
  options: Option[];
  isSearchable?: boolean;
  placeholder?: string;
  overrideClassNames?: Partial<SelectClassSelectors>;
}

const IndicatorSeparator = () => null;
const DropdownIndicator: typeof components.DropdownIndicator = (props) => {
  const ArrowIcon = props.selectProps.menuIsOpen ? ArrowUpIcon : ArrowDownIcon;

  return <ArrowIcon className="absolute inset-y-2 right-2.5" />;
}

function overrideClassName<T extends BaseProps>(
  WrappedComponent: React.FC<T>,
  classSelector?: (props: T) => string
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithInjectedClassName = (props: T) => {
    const className = classSelector
      ? clsx(props.className, classSelector(props))
      : props.className;

    return <WrappedComponent {...props} className={className} />;
  }

  ComponentWithInjectedClassName.displayName = `injectedClassName(${displayName})`;

  return ComponentWithInjectedClassName;
}

export const Select: React.FC<SelectProps> = ({
  overrideClassNames = {},
  className,
  name,
  placeholder,
  options,
  ...restProps
}) => {
  const overridedComponents = mapValues({
    ...components,
    IndicatorSeparator,
    DropdownIndicator,
  }, (item, key) => overrideClassName(item as any, overrideClassNames[key as keyof typeof overrideClassNames] as any));
  const selectedOption = options.find(item => item.value === restProps.value);

  return (
    <ReactSelect
      name={name}
      className={clsx(className)}
      options={options}
      components={overridedComponents as any}
      styles={styles}
      isSearchable={false}
      placeholder={placeholder}
      {...restProps}
      value={selectedOption}
    />
  );
}