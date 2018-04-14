import React from "react";
import "./Card.css";

const Card = props => (
  <div 
    className="card">
      <img 
        id={props.id}
        alt={props.name} 
        src={props.image}
        className={`card-btn ${props["data-value"]}`}
        {...props} 
        data-value="pick"
        onClick={() => props.handleBtnClick(props.id)}
        
        />
  </div>
);

export default Card;
