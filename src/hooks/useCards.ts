import { useCallback, useEffect, useState, useTransition } from "react";
import { CardsService } from "../api/cards";
import { Card as CardType } from "../api/types";
import { getStorageByKey } from "../helpers/storage";
import { storageKeys } from "../constants";

export const useCards = () => {
  const [cardsList, setCardsList] = useState<CardType[] | []>([]);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isPending, startTransition] = useTransition();

  const getCards = useCallback(
    async (name: string) => {
      setIsInProgress(true);
      try {
        const { results } = await CardsService.getCards({
          name,
        });
        startTransition(() => {
          setCardsList(results);
        });
      } catch (e) {
        setCardsList([]);
      } finally {
        setIsInProgress(false);
      }
    },
    [setCardsList, setIsInProgress]
  );

  useEffect(() => {
    getCards(getStorageByKey(storageKeys.searchValue));
  }, [getCards]);

  return { cardsList, isInProgress: isPending || isInProgress, getCards };
};
