// lib/hooks/useMatch.ts

import { useState, useCallback } from "react";
import { Dog, Match } from "../api/types";
import { dogsApi } from "../api/dogs";

interface UseMatchResult {
  matchedDog: Dog | null;
  loading: boolean;
  error: string | null;
  generateMatch: (favoriteIds: string[]) => Promise<void>;
  clearMatch: () => void;
}

export function useMatch(): UseMatchResult {
  const [matchedDog, setMatchedDog] = useState<Dog | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateMatch = useCallback(async (favoriteIds: string[]) => {
    if (favoriteIds.length === 0) {
      setError("Please add some dogs to your favorites first");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Generate match from API
      const matchResponse: Match = await dogsApi.generateMatch(favoriteIds);

      // Fetch the matched dog's details
      const [matchedDogData] = await dogsApi.getDogs([matchResponse.match]);

      setMatchedDog(matchedDogData);
    } catch (err) {
      console.error("Failed to generate match:", err);
      setError(err instanceof Error ? err.message : "Failed to generate match");
      setMatchedDog(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearMatch = useCallback(() => {
    setMatchedDog(null);
    setError(null);
  }, []);

  return {
    matchedDog,
    loading,
    error,
    generateMatch,
    clearMatch,
  };
}
