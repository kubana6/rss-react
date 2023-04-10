export interface DateInputProps {
  error?: string;
  className?: string;
  classNameWrapper?: string;
  value?: string;
  id?: string;
  labelName?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
}
