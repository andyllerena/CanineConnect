// lib/api/dogs.ts

import { apiClient } from "./client";
import { Dog, DogSearchParams, DogSearchResponse, Match } from "./types";

export const dogsApi = {
  /**
   * Get all available dog breeds
   */
  async getBreeds(): Promise<string[]> {
    return apiClient.get<string[]>("/dogs/breeds");
  },

  /**
   * Search for dogs with filters
   */
  async searchDogs(params: DogSearchParams = {}): Promise<DogSearchResponse> {
    return apiClient.get<DogSearchResponse>("/dogs/search", params);
  },

  /**
   * Fetch specific dogs by their IDs
   */
  async getDogs(dogIds: string[]): Promise<Dog[]> {
    if (dogIds.length === 0) return [];
    if (dogIds.length > 100) {
      throw new Error("Cannot fetch more than 100 dogs at once");
    }
    return apiClient.post<Dog[]>("/dogs", dogIds);
  },

  /**
   * Generate a match from favorite dog IDs
   */
  async generateMatch(favoriteIds: string[]): Promise<Match> {
    if (favoriteIds.length === 0) {
      throw new Error("Must provide at least one favorite dog ID");
    }
    return apiClient.post<Match>("/dogs/match", favoriteIds);
  },
};
