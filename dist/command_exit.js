export function commandExit(state) {
    console.log("Closing the Pokedex... Goodbye!");
    state.readWrite.close();
    process.exit(0);
}
