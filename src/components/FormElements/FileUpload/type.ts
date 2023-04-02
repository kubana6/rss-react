export type FileUploadProps = {
  accept: string;
  multiple?: boolean;
  onChange?: (files: File[]) => void;
  refObject?: React.RefObject<HTMLInputElement>;
  id?: string;
  labelName?: string;
  errors?: string[] | null;
  className?: string;
  classNameWrapper?: string;
};
