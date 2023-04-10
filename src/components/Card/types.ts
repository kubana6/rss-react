import { Card } from "../../api/types";

export interface CardProps extends Card {
  className?: string;
  onClick: (card: Card) => void;
}
