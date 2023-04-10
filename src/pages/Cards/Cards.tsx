import { storageKeys } from "../../constants";
import { getStorageByKey, setStorageByKey } from "../../helpers/storage";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "../../components/FormElements/Input/Input";
import { Card } from "../../components/Card/Card";
import { Card as CardItem } from "../../api/types";

import { useCards } from "../../hooks/useCards";
import "./Cards.scss";
import { Modal } from "../../components/Modal/Modal";

export const Cards = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchValueRef = useRef(searchValue);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { cardsList, isInProgress, getCards } = useCards();
  const [currenCards, setCurrentCards] = useState<CardItem | null>(null);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearchValue(e.target.value);
    },
    [setSearchValue]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCards(searchValue);
    setStorageByKey(searchValue, storageKeys.searchValue);
  };

  const onCloseModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActiveModal(false);
  };

  useEffect(() => {
    const storageValue = getStorageByKey(storageKeys.searchValue);

    setSearchValue(storageValue);
  }, []);

  const onHandleClickCard = (card: CardItem) => {
    setCurrentCards(card);
    setIsActiveModal(true);
  };

  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      setStorageByKey(searchValueRef.current, storageKeys.searchValue);
    };
  }, []);

  return (
    <section className="cards">
      <form onSubmit={onSubmit}>
        <Input name="cardsInput" className="cards-input" value={searchValue} onChange={onChange} />
      </form>
      <div className="cards-content">
        {isInProgress ? (
          <p>...loading</p>
        ) : (
          cardsList.map(({ id, ...rest }) => (
            <Card
              key={id}
              id={id}
              {...rest}
              className="cards-content-item"
              onClick={onHandleClickCard}
            />
          ))
        )}
      </div>
      {currenCards && isActiveModal && (
        <Modal onClose={onCloseModal}>
          <div>
            <p>{currenCards.name}</p>
            <img src={currenCards.image} />
            <div className="card-information">
              <span>status: {currenCards.status}</span>
              <span>species: {currenCards.species}</span>
              <span>type: {currenCards.type}</span>
              <span>gender: {currenCards.gender}</span>
              <span>location: {currenCards.location.name}</span>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
