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

    if (words.length === 0) {
      r1.prompt();
      return;
    }

    const command = words[0];

    const commands = state.commandsRegistry;

    if (command in commands) {
      try {
        const commandObject = commands[command];
        await commandObject.callback(state);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Unknown command");
    }

    r1.prompt();
  });
}
