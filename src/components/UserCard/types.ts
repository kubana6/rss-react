export interface UserCardProps {
  className?: string;
  onClick?: () => void;
  id?: number;
  firstName: string;
  lastName: string;
  birthDay: string;
  country: string;
  gender: string;
  avatar: string;
}
