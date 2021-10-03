import React from "react";
import s from "./Card.module.css";

const Card = (props) => {
  const { name, image, description } = props;
  return (
    <div className={s.Card}>
      <div>
        <img className={s.Card_Image} src={image} alt={name} />
        <div className={s.Card_Title}>{name}</div>
        <div className={s.Card_Description}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
