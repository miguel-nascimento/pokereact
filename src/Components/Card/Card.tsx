import React from "react";
import "./CardStyle.css";
import { useTheme } from "../../Themes/ThemeContext";

interface CardProps {
  name: string;
  image: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { theme } = useTheme();
  return (
    <div id="card">
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>
      <div className={`details ${theme}`}>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Card;
