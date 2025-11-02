import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  cache: Cache;

  constructor(intervalMinutes: number) {
    this.cache = new Cache(intervalMinutes);
  }

  async fetchLocations(pageURL: string | null): Promise<ShallowLocations> {
    let url = pageURL || `${PokeAPI.baseURL}/location-area/`;

    const cacheEntry = this.cache.get(url);
    if (cacheEntry) {
      return cacheEntry.val;
    } else {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        this.cache.add(url, result);
        return result;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Invalid JSON String!: ${error.message}`);
        } else {
          throw new Error(`Unknown error occurred: ${error}`);
        }
      }
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

    const cacheEntry = this.cache.get(url);
    if (cacheEntry) {
      return cacheEntry.val;
    } else {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        this.cache.add(url, result);
        return result;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Invalid JSON String!: ${error.message}`);
        } else {
          throw new Error(`Unknown error occurred: ${error}`);
        }
      }
    }
  }
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

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};
