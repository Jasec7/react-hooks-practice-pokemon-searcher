import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemons.map((pokemon) =>(
        <PokemonCard 
        key={pokemon.id} 
        name={pokemon.name} 
        hp={pokemon.hp} 
        front={pokemon.sprites.front}
        back={pokemon.sprites.back}
        />
      ))}
    </Card.Group>
  );
  
}

export default PokemonCollection;
