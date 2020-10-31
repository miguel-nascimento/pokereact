import React from "react";
import { StyledHeader } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img
        className="logo"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeApi Logo"
      />
    </StyledHeader>
  );
};

export default Header;
