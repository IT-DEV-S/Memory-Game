import React from "react";
import Card from "../Component/Card";

const CardList = ({ clickCheck, cards }) => {
  const cardsList = cards.map((card) => (
    <Card
      key={card.id}
      type={card.type}
      showing={card.cardState}
      click={() => clickCheck(card.id, card.type)}
    />
  ));
  return <div className="cards-block">{cardsList}</div>;
};
export default CardList;
