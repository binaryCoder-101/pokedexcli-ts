import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("Please provide a pokemon name");
  }

  const pokemon = args[0];

  if (!(pokemon in state.pokedex)) {
    throw new Error("Pokemon not yet caught!");
  }

  const pokemonDetails = state.pokedex[pokemon];

  console.log(`Name: ${pokemonDetails.name}`);
  console.log(`Height: ${pokemonDetails.height}`);
  console.log(`Weight: ${pokemonDetails.weight}`);
  console.log(`Stats: `);
  for (let stat of pokemonDetails.stats) {
    console.log(`-${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log(`Types: `);
  for (let type of pokemonDetails.types) {
    console.log(`- ${type.type.name}`);
  }
}
