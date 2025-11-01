import { createInterface, Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commandsRegistry: Record<string, CLICommand>;
  prevLocationsURL: string;
  nextLocationsURL: string;
  pokeapi: PokeAPI;
};

export function initState(): State {
  const r1 = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Pokedex > `,
  });

  const commandsRegistry = getCommands();

  return {
    readline: r1,
    commandsRegistry: commandsRegistry,
    prevLocationsURL: "",
    nextLocationsURL: "",
    pokeapi: new PokeAPI(3 * 60 * 1000),
  };
}
