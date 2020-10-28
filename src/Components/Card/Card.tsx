import React from "react";
import "./CardStyle.css";

interface CardProps {
  name: string;
  image: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>
      <div className="details">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Card;
