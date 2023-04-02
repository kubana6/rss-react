export interface CheckboxProps {
  onChange?: (value: string) => void;
  errors?: string[] | null;
  className?: string;
  checked?: boolean;
  refObject?: React.RefObject<HTMLInputElement>;
  id?: string;
  labelName?: string;
  name?: string;
}
