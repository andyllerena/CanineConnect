// lib/hooks/useBreeds.ts

import { useState, useEffect } from "react";
import { dogsApi } from "../api/dogs";

interface UseBreedsResult {
  breeds: string[];
  loading: boolean;
  error: string | null;
}

export function useBreeds(): UseBreedsResult {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setLoading(true);
        setError(null);
        const breedsData = await dogsApi.getBreeds();
        setBreeds(breedsData.sort()); // Sort alphabetically
      } catch (err) {
        console.error("Failed to fetch breeds:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch breeds");
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  return {
    breeds,
    loading,
    error,
  };
}
