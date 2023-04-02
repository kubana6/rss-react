export interface SelectProps {
  options: Option[];
  value?: string;
  className?: string;
  classNameWrapper?: string;
  id?: string;
  labelName?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  name: string;
}
export interface Option {
  value: string;
  label: string;
}
