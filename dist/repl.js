import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
export function cleanInput(inputString) {
    const newArray = inputString.trim().toLowerCase().split(" ");
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i];
    }
    return newArray;
}
const r1 = createInterface({
    input: stdin,
    output: stdout,
    prompt: `Pokedex > `,
});
export function startREPL() {
    r1.prompt();
    r1.on("line", (input) => {
        let words = cleanInput(input);
        if (words.length === 0) {
            r1.prompt();
            return;
        }
        else {
            console.log(`Your command was: ${words[0]}`);
            r1.prompt();
        }
    });
}
