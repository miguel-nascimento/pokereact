import React from "react";
<<<<<<< HEAD:src/Components/Card/Card.tsx
import "./CardStyle.css";
import { useTheme } from "../../Themes/ThemeContext";
=======
import { StyledCard } from "./CardStyle";
>>>>>>> dev:src/components/Card/Card.tsx

interface CardProps {
  name: string;
  image: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { theme } = useTheme();
  return (
<<<<<<< HEAD:src/Components/Card/Card.tsx
    <div id="card">
=======
    <StyledCard>
>>>>>>> dev:src/components/Card/Card.tsx
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>
      <div className={`details ${theme}`}>
        <h1>{props.name}</h1>
      </div>
    </StyledCard>
  );
};

export default Card;
