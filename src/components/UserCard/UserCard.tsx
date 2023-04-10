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
  <button className={`user-card ${className || ""}`}>
    <p className="user-card-title">{`User: ${lastName} ${firstName}`}</p>
    <img className="user-card-image" src={avatar} alt={`user-card post ${lastName}`} />
    <div className="user-card-information">
      <span>country: {country}</span>
      <span>birthDay: {birthDay}</span>
      <span>gender: {gender}</span>
    </div>
  </button>
);
