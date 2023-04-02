import React from "react";
import { UserCardProps } from "./types";
import "./UserCard.scss";

export const UserCard: React.FC<UserCardProps> = ({
  className,
  avatar,
  lastName,
  firstName,
  birthDay,
  country,
  gender,
}) => (
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
