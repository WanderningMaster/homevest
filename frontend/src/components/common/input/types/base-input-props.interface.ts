export interface BaseInputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  isInvalid?: boolean;
  errorText?: string;
}
