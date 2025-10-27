import { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  if (!state.nextLocationsURL && state.prevLocationsURL) {
    console.log("No more next location areas to display!");
    return;
  }

  const result = await state.pokeapi.fetchLocations(state.nextLocationsURL);

  for (let location of result.results) {
    console.log(location.name);
  }

  state.prevLocationsURL = result.previous;
  state.nextLocationsURL = result.next;
}

export async function commandMapBack(state: State): Promise<void> {
  if (state.nextLocationsURL && !state.prevLocationsURL) {
    console.log("No more previous location areas to display!");
    return;
  }

  const result = await state.pokeapi.fetchLocations(state.prevLocationsURL);

  for (let location of result.results) {
    console.log(location.name);
  }

  state.prevLocationsURL = result.previous;
  state.nextLocationsURL = result.next;
}
