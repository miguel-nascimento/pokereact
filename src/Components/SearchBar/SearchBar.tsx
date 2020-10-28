import React from "react";
import "./SearchBarStyle.css";

interface SearchProps {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

const SearchBar: React.FC<SearchProps> = (props) => {
  return (
    <form action="">
      <input
        type="text"
        name="name"
        placeholder="Filtre um pokémon em espécifico"
        onChange={props.onChange}
      />
    </form>
  );
};

export default SearchBar;
