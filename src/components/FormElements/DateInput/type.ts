export interface DateInputProps {
  onChange?: (value: string) => void;
  errors?: string[] | null;
  className?: string;
  classNameWrapper?: string;
  value?: string;
  refObject?: React.RefObject<HTMLInputElement>;
  id?: string;
  labelName?: string;
}
