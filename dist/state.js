import { createInterface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
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
        pokeapi: new PokeAPI(5),
    };
}
