export interface ButtonProps {
  onClick?: () => void;
  color: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
}
