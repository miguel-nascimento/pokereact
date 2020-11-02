import React from "react";
import { StyledCard } from "./CardStyle";

interface CardProps {
  name: string;
  image: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <StyledCard>
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>
      <div className="details">
        <h1>{props.name}</h1>
      </div>
    </StyledCard>
  );
};

export default Card;
