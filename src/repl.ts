import { State } from "./state.js";

export function cleanInput(inputString: string): string[] {
  const newArray = inputString.trim().toLowerCase().split(" ");
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i];
  }
  return newArray;
}

export function startREPL(state: State) {
  const r1 = state.readline;

  r1.prompt();

  r1.on("line", async (input) => {
    const words = cleanInput(input);
    
    const command = words[0];
    const parameter = words.slice(1);

    const commands = state.commandsRegistry;

    if (command in commands) {
      try {
        const commandObject = commands[command];
        if (!parameter) {
          await commandObject.callback(state);
        } else {
          await commandObject.callback(state, ...parameter);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Unknown command");
    }

    r1.prompt();
  });
}
