import React, { useContext } from "react";
import { StyledHeader } from "./HeaderStyle";
import Switcher from "react-switch";
import { ThemeContext } from "styled-components";
import { lighten, shade } from "polished";

interface HeaderProps {
  changeTheme(): void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledHeader>
      <img
        className="logo"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeApi Logo"
      />
      <Switcher
        onChange={props.changeTheme}
        className="switcher"
        checked={theme.title === "dark" ? true : false}
        height={10}
        width={20}
        handleDiameter={15}
        onColor={lighten(0.15, theme.color.primary)}
        offColor={shade(0.15, theme.color.primary)}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </StyledHeader>
  );
};

export default Header;
