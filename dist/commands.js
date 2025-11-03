import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandPokedex } from "./command_pokedex.js";
export function getCommands() {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Displays next 20 locations",
            callback: commandMap,
        },
        mapback: {
            name: "mapback",
            description: "Displays previous 20 locations",
            callback: commandMapBack,
        },
        explore: {
            name: "explore",
            description: "Displays Pokemon names in a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Catches a Pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspects a caught Pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Shows list of all Pokemons caught",
            callback: commandPokedex,
        }
    };
}
