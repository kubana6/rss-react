import React from "react";
import { CardProps } from "./types";
import "./Card.scss";

export const Card: React.FC<CardProps> = ({ className, onClick, ...cardData }) => {
  const { image, name, status, gender } = cardData;
  const onHandleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(cardData);
  };
  return (
    <button className={`card ${className || ""}`} onClick={onHandleClick}>
      <p className="card-title">{name}</p>
      <img className="card-image" src={image} alt={`card post ${name}`} />
      <div className="card-information">
        <span>status: {status}</span>
        <span>gender: {gender}</span>
      </div>
    </button>
  );
};
