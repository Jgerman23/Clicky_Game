import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
  <div
    role="img"
    aria-label="click card"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-card${props.shake ? " shake" : ""}`}
  />
);

export default ClickCard;