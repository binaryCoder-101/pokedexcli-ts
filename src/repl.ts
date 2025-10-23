import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands.js";

export function cleanInput(inputString: string): string[] {
    const newArray = inputString.trim().toLowerCase().split(" ");
    for (let i=0; i<newArray.length; i++) {
        newArray[i] = newArray[i];
    }
    return newArray;
}


export function startREPL() {
    const r1 = createInterface({
        input: stdin,
        output: stdout,
        prompt: `Pokedex > `,
    });

    r1.prompt();

    r1.on("line", (input) => {
        const words = cleanInput(input);

        if (words.length === 0){
            r1.prompt();
            return;
        }

        const command = words[0];

        const commands = getCommands();
            
        if (command in commands) {
                try {
                    const commandObject = commands[command];
                    commandObject.callback(commands);
                } catch (e) {
                    console.log(e);
                }
        } else {
                console.log("Unknown command");
        }

        r1.prompt();    
    })
}