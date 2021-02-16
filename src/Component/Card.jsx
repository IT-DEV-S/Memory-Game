import React from "react";

const Card = ({ type, showing, click }) => {
  let style = {};
  if (showing) style = { backgroundColor: type, pointerEvents: "none" };
  return <div onClick={click} style={style} className="card" />;
};

export default Card;
