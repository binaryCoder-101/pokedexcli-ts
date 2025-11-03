export async function commandPokedex(state) {
    if (Object.keys(state.pokedex).length === 0) {
        throw new Error(`No Pokemon caught yet!`);
    }
    console.log(`Your Pokedex:`);
    for (let pokemon in state.pokedex) {
        console.log(`- ${pokemon}`);
    }
}
