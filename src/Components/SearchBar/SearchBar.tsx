import React from "react";
import { StyledForm } from "./SearchBarStyle";
interface SearchProps {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

const SearchBar: React.FC<SearchProps> = (props) => {
  return (
    <StyledForm>
      <input
        type="text"
        name="name"
        placeholder="Filtre um pokémon em espécifico"
        autoComplete="off"
        onChange={props.onChange}
      />
    </StyledForm>
  );
};

export default SearchBar;
