export interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  refObject?: React.RefObject<HTMLSelectElement>;
  className?: string;
  classNameWrapper?: string;
  id?: string;
  labelName?: string;
  errors?: string[] | null;
}
export interface Option {
  value: string;
  label: string;
}
