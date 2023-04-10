export type RadioButtonProps = {
  labelName?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  refObject?: React.RefObject<HTMLInputElement>;
  errors?: string[] | null;
  className?: string;
  classNameWrapper?: string;
  name: string;
  value: string;
};
