import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
  <div
    className={`click-card${props.shake ? " shake" : ""}`}
    role="img"
    aria-label="click card"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
  />
);

export default ClickCard;