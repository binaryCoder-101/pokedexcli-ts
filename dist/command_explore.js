export async function commandExplore(state, location) {
    const result = await state.pokeapi.fetchLocation(location);
    for (let pokemonDetails of result.pokemon_encounters) {
        console.log(pokemonDetails.pokemon.name);
    }
}
