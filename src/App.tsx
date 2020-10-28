//@ts-nocheck
import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./GlobalStyles.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=893&offset=0`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = [];
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index,
            name: pokemon.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemon(newPokemonData);
      });
  }, []);

  const handleSearch = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onChange={handleSearch} />
      <div className="grid-container">
        {pokemon.map(
          (pokemon) =>
            pokemon.name.includes(filter) && (
              <Card key={pokemon.id} image={pokemon.url} name={pokemon.name} />
            )
        )}
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
