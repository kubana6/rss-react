import React from "react";
import { CardProps } from "./types";
import "./Card.scss";

export const Card: React.FC<CardProps> = ({ className, image, title, views, likes }) => (
  <button className={`card ${className || ""}`}>
    <p className="card-title">{title}</p>
    <img className="card-image" src={image} alt={`card post ${title}`} />
    <div className="card-information">
      <span>likes: {likes}</span>
      <span>views: {views}</span>
    </div>
  </button>
);
