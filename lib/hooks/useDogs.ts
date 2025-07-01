// lib/hooks/useDogs.ts

import { useState, useEffect } from "react";
import { Dog, DogSearchParams, DogSearchResponse } from "../api/types";
import { dogsApi } from "../api/dogs";
import {
  calculateTotalPages,
  cursorToPage,
  parseCursor,
} from "../utils/queryParams";

interface UseDogsResult {
  dogs: Dog[];
  loading: boolean;
  error: string | null;
  searchResults: DogSearchResponse | null;
  currentPage: number;
  totalPages: number;
  refetch: () => Promise<void>;
}

export function useDogs(searchParams: DogSearchParams): UseDogsResult {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<DogSearchResponse | null>(
    null
  );

  const pageSize = searchParams.size || 25;
  const currentPage = cursorToPage(searchParams.from, pageSize);
  const totalPages = searchResults
    ? calculateTotalPages(searchResults.total, pageSize)
    : 0;

  const fetchDogs = async () => {
    try {
      setLoading(true);
      setError(null);

      // First, search for dog IDs
      const searchResponse = await dogsApi.searchDogs(searchParams);
      setSearchResults(searchResponse);

      // Then fetch the actual dog data
      if (searchResponse.resultIds.length > 0) {
        const dogData = await dogsApi.getDogs(searchResponse.resultIds);
        setDogs(dogData);
      } else {
        setDogs([]);
      }
    } catch (err) {
      console.error("Failed to fetch dogs:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch dogs");
      setDogs([]);
      setSearchResults(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, [
    searchParams.breeds?.join(","),
    searchParams.zipCodes?.join(","),
    searchParams.ageMin,
    searchParams.ageMax,
    searchParams.size,
    searchParams.from,
    searchParams.sort,
  ]);

  return {
    dogs,
    loading,
    error,
    searchResults,
    currentPage,
    totalPages,
    refetch: fetchDogs,
  };
}
