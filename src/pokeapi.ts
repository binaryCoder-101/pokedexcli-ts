export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL: string | null): Promise<ShallowLocations> {
    let url = pageURL || `${PokeAPI.baseURL}/location-area/`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Invalid JSON String!: ${error.message}`);
      } else {
        throw new Error(`Unknown error occurred: ${error}`);
      }
    }
  }

  //   async fetchLocation(locationName: string): Promise<Location> {
  //         const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
  //   }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {};
