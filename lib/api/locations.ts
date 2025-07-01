// lib/api/locations.ts

import { apiClient } from "./client";
import {
  Location,
  LocationSearchParams,
  LocationSearchResponse,
} from "./types";

export const locationsApi = {
  /**
   * Fetch location data for specific ZIP codes
   */
  async getLocations(zipCodes: string[]): Promise<Location[]> {
    if (zipCodes.length === 0) return [];
    if (zipCodes.length > 100) {
      throw new Error("Cannot fetch more than 100 locations at once");
    }
    return apiClient.post<Location[]>("/locations", zipCodes);
  },

  /**
   * Search for locations with filters
   */
  async searchLocations(
    params: LocationSearchParams = {}
  ): Promise<LocationSearchResponse> {
    return apiClient.post<LocationSearchResponse>("/locations/search", params);
  },
};
