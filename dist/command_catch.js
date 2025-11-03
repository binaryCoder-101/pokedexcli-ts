export async function commandCatch(state, ...args) {
    const pokemon = args[0];
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    const result = await state.pokeapi.fetchPokemonDetails(pokemon);
    const experience = result.base_experience;
    const caught = Math.floor(Math.random() * experience);
    if (caught > 40) {
        console.log(`${pokemon} escaped!`);
        return;
    }
    console.log(`${pokemon} was caught!`);
    console.log("You may now inspect it with the inspect command.");
    state.pokedex[pokemon] = result;
}
