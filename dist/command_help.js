export async function commandHelp(state) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    const commands = state.commandsRegistry;
    for (let command in commands) {
        console.log(`${command}: ${commands[command].description}`);
    }
}
