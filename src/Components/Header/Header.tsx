import React from "react";
import "./HeaderStyle.css";
import { useTheme } from "../../Themes/ThemeContext";

export default function Header() {
  const { theme } = useTheme();
  return (
    <header id={theme}>
      <img
        className="logo"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeApi Logo"
      />
    </header>
  );
};
