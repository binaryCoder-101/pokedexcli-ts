import { CLICommand } from "./commands.js";

export function commandHelp(commands?: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    for (let command in commands) {
        console.log(`${command}: ${commands[command].description}`);
    }
}