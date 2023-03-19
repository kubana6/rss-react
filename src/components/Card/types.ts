export interface CardProps {
  className?: string;
  onClick: () => void;
  id?: number;
  title: string;
  image: string;
  views: number;
  likes: number;
}
