export type FileUploadProps = {
  accept: string;
  multiple?: boolean;
  refObject?: React.RefObject<HTMLInputElement>;
  id?: string;
  labelName?: string;
  error?: string;
  className?: string;
  classNameWrapper?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
};
