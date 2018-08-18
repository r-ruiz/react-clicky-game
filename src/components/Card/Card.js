import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.clickTotal(props.id)}>
    <div className="img-box">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;