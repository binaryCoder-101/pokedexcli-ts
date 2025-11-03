import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  
  const location = args[0];
  
  const result = await state.pokeapi.fetchLocation(location);

  for (let pokemonDetails of result.pokemon_encounters) {
    console.log(pokemonDetails.pokemon.name);
  }
}
