import React, { Component } from "react";
import { UserCardProps } from "./types";
import "./UserCard.scss";

export class UserCard extends Component<UserCardProps> {
  render(): React.ReactNode {
    const { className, avatar, lastName, firstName, birthDay, country, gender } = this.props;
    return (
      <button className={`card ${className || ""}`}>
        <p className="card-title">{`User: ${lastName} ${firstName}`}</p>
        <img className="card-image" src={avatar} alt={`card post ${lastName}`} />
        <div className="card-information">
          <span>country: {country}</span>
          <span>birthDay: {birthDay}</span>
          <span>gender: {gender}</span>
        </div>
      </button>
    );
  }
}
