import React from "react";
import "./HeaderStyle.css";

const Header: React.FC = () => {
  return (
    <header>
      <img
        className="logo"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeApi Logo"
      />
    </header>
  );
};

export default Header;
