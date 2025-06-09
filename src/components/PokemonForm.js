import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
const [pokemonData, setPokemonData] = useState({
      name: "",
      hp: 0,
      sprites: {
      front: "",
      back: ""
      }
});

  function handleSubmit(e){
    e.preventDefault()
console.log("Submitting Pokémon:", pokemonData);
    fetch("http://localhost:3001/pokemon", {
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body: JSON.stringify(pokemonData),
    })
    .then((r) => r.json())
    .then((newPokemon) => {onAddPokemon(newPokemon);
      setPokemonData({name:"", hp:0, sprites:{front:"", back:""}})
    })
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokemonData.name}
          onChange={(e) => setPokemonData({...pokemonData, name:e.target.value})} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokemonData.hp}
          onChange={(e) => setPokemonData({...pokemonData, hp:parseInt(e.target.value)})} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokemonData.sprites.front}
            onChange={(e) => setPokemonData({...pokemonData, sprites:{...pokemonData.sprites, front:e.target.value}})}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokemonData.sprites.back}
            onChange={(e) => setPokemonData({...pokemonData, sprites:{...pokemonData.sprites, back:e.target.value}})}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
