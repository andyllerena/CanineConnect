// lib/hooks/useFavorites.ts

import { useState, useCallback } from "react";
import { Dog } from "../api/types";
import { dogsApi } from "../api/dogs";

interface UseFavoritesResult {
  favorites: string[];
  favoriteDogs: Dog[];
  loadingFavorites: boolean;
  addFavorite: (dogId: string) => void;
  removeFavorite: (dogId: string) => void;
  toggleFavorite: (dogId: string) => void;
  isFavorite: (dogId: string) => boolean;
  clearFavorites: () => void;
  loadFavoriteDogs: () => Promise<void>;
}

export function useFavorites(): UseFavoritesResult {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>([]);
  const [loadingFavorites, setLoadingFavorites] = useState(false);

  const addFavorite = useCallback((dogId: string) => {
    setFavorites((prev) => {
      if (prev.includes(dogId)) return prev;
      return [...prev, dogId];
    });
  }, []);

  const removeFavorite = useCallback((dogId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== dogId));
    setFavoriteDogs((prev) => prev.filter((dog) => dog.id !== dogId));
  }, []);

  const toggleFavorite = useCallback((dogId: string) => {
    setFavorites((prev) => {
      if (prev.includes(dogId)) {
        // Remove from favorites
        setFavoriteDogs((current) => current.filter((dog) => dog.id !== dogId));
        return prev.filter((id) => id !== dogId);
      } else {
        // Add to favorites
        return [...prev, dogId];
      }
    });
  }, []);

  const isFavorite = useCallback(
    (dogId: string) => {
      return favorites.includes(dogId);
    },
    [favorites]
  );

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    setFavoriteDogs([]);
  }, []);

  const loadFavoriteDogs = useCallback(async () => {
    if (favorites.length === 0) {
      setFavoriteDogs([]);
      return;
    }

    try {
      setLoadingFavorites(true);
      const dogs = await dogsApi.getDogs(favorites);
      setFavoriteDogs(dogs);
    } catch (error) {
      console.error("Failed to load favorite dogs:", error);
    } finally {
      setLoadingFavorites(false);
    }
  }, [favorites]);

  return {
    favorites,
    favoriteDogs,
    loadingFavorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    loadFavoriteDogs,
  };
}
