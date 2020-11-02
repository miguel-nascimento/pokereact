import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { StyledHeader } from "./HeaderStyle";
import { lighten, shade } from "polished";

interface Props {
  onChange: () => void;
}

const Header: React.FC<Props> = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledHeader>
      <img
        className="logo"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeApi Logo"
      />
      <Switch
        className="switch"
        height={12.5}
        width={25}
        handleDiameter={15}
        checked={theme.title === "light" ? true : false}
        onChange={props.onChange}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={shade(0.15, theme.color.primary)}
        offColor={lighten(0.15, theme.color.off)}
      />
    </StyledHeader>
  );
};

export default Header;
