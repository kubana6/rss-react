export interface InputProps {
  onChange: (value: string) => void;
  errors?: string[] | null;
  className?: string;
  value: string;
}
