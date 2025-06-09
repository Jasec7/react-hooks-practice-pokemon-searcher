import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemons, setPokemons] = useState([])
const [searchPokemon, setSearchPokemon] = useState("")
useEffect(() => {
  fetch("http://localhost:3001/pokemon")
  .then((r) => r.json())
  .then((pokemons) => setPokemons(pokemons))
},[])

function handleSearch(e){
  setSearchPokemon(e.target.value)
};

const filterPokemons= pokemons.filter((pokemon) => {
  return pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
});

function handleAddPokemon(newPokemon){
  setPokemons([...pokemons, newPokemon])
}
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokemons={filterPokemons} />
    </Container>
  );
}

export default PokemonPage;
