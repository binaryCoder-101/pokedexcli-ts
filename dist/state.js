import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
export function initState() {
    const readWrite = createInterface({
        input: stdin,
        output: stdout,
        prompt: `Pokedex > `,
    });
    const commandsRegistry = {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        }
    };
    return {
        readWrite: readWrite,
        commandsRegistry: commandsRegistry,
    };
}
