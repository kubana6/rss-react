import React, { Component } from "react";
import { CardProps } from "./types";
import "./Card.scss";

export class Card extends Component<CardProps> {
  render(): React.ReactNode {
    const { className, image, title, views, likes } = this.props;
    return (
      <button className={`card ${className || ""}`}>
        <p className="card-title">{title}</p>
        <img className="card-image" src={image} alt={`card post ${title}`} />
        <div className="card-information">
          <span>likes: {likes}</span>
          <span>views: {views}</span>
        </div>
      </button>
    );
  }
}
