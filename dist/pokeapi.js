export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        let url = pageURL || `${PokeAPI.baseURL}/location-area/`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Invalid JSON String!: ${error.message}`);
            }
            else {
                throw new Error(`Unknown error occurred: ${error}`);
            }
        }
    }
}
