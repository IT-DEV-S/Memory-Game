import React, { useState, useEffect } from "react";

import CardList from "./Component/CardList";
import NewGame from "./Component/NewGame";

import "./scss/App.scss";

const App = () => {
  const CardState = {
    HIDING: 0,
    SHOWING: 1,
  };
  const clickState = {
    none: 0,
    one: 1,
    two: 2,
  };
  let cardsList = [
    { id: 1, cardState: CardState.HIDING, type: "red" },
    { id: 2, cardState: CardState.HIDING, type: "red" },
    { id: 3, cardState: CardState.HIDING, type: "navy" },
    { id: 4, cardState: CardState.HIDING, type: "navy" },
    { id: 5, cardState: CardState.HIDING, type: "green" },
    { id: 6, cardState: CardState.HIDING, type: "green" },
    { id: 7, cardState: CardState.HIDING, type: "yellow" },
    { id: 8, cardState: CardState.HIDING, type: "yellow" },
    { id: 9, cardState: CardState.HIDING, type: "black" },
    { id: 10, cardState: CardState.HIDING, type: "black" },
    { id: 11, cardState: CardState.HIDING, type: "purple" },
    { id: 12, cardState: CardState.HIDING, type: "purple" },
    { id: 13, cardState: CardState.HIDING, type: "pink" },
    { id: 14, cardState: CardState.HIDING, type: "pink" },
    { id: 15, cardState: CardState.HIDING, type: "lightskyblue" },
    { id: 16, cardState: CardState.HIDING, type: "lightskyblue" },
  ];

  const random = (i) => i.sort(() => 0.5 - Math.random());

  const [cards, setCards] = useState(random(cardsList));
  const [click, setClick] = useState(clickState.none);
  const [selectCard, setSelectCard] = useState({ id: 0, type: "" });
  const [gameTime, setGmaeTime] = useState(0);

  useEffect(() => {
    let internalvalid;

    internalvalid = setInterval(() => {
      setGmaeTime((gameTime) => gameTime + 1);
    }, 1000);
    return () => clearInterval(internalvalid);
  }, [gameTime]);

  const New = () => {
    setCards(random(cardsList));
    setGmaeTime(0);
  };

  const showCard = (id) => {
    let newCards = [...cards];
    newCards.find((i) => i.id === id).cardState = CardState.SHOWING;
    setCards(newCards);
  };

  const closeCard = (id) => {
    let newCards = [...cards];
    newCards.find((i) => i.id === id).cardState = CardState.HIDING;
    setCards(newCards);
  };

  const clickCheck = (e, type) => {
    if (click === clickState.none) {
      setClick(clickState.one);
      setSelectCard({ id: e, type: type });
      showCard(e);
    }
    if (click === clickState.one) {
      showCard(e);

      if (selectCard.type !== type) {
        setTimeout(() => {
          closeCard(e);
          closeCard(selectCard.id);
        }, 250);
      }
      setSelectCard({ id: e, type: type });
      setClick(clickState.none);
    }
  };

  return (
    <div className="App">
      <div className="cardlist">
        <CardList clickCheck={clickCheck} cards={cards} />
      </div>
      <div className="new">
        <NewGame NewGame={New} />
      </div>
      <div className="time">
        GAME TIME
        <br />
        <br />
        {gameTime}
      </div>
    </div>
  );
};

export default App;
