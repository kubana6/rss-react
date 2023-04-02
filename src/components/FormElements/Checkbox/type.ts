export interface CheckboxProps {
  error?: string;
  className?: string;
  checked?: boolean;
  id?: string;
  labelName?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
