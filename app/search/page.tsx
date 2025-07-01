"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import SearchFilters from "./components/SearchFilters";
import SortControls from "./components/SortControls";
import SearchResults from "./components/SearchResults";
import FavoritesPanel from "./components/FavoritesPanel";
import MatchModal from "./components/MatchModal";
import Pagination from "./components/Pagination";
import { useDogs } from "../../lib/hooks/useDogs";
import { useFavorites } from "../../lib/hooks/useFavorites";
import { useMatch } from "../../lib/hooks/useMatch";
import { filtersToSearchParams } from "../../lib/utils/queryParams";
import { SortField } from "@/lib/utils/sorting";

interface Filters {
  breeds: string[];
  ageMin: string;
  ageMax: string;
  zipCode: string;
}

const SearchPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    breeds: [],
    ageMin: "",
    ageMax: "",
    zipCode: "",
  });

  const [sortBy, setSortBy] = useState<SortField>("breed");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showMatch, setShowMatch] = useState<boolean>(false);

  const pageSize = 25;

  // Convert filters to search params
  const searchParams = filtersToSearchParams(
    filters,
    sortBy,
    sortDirection,
    currentPage,
    pageSize
  );

  // Use hooks
  const { dogs, loading, error, searchResults, totalPages, refetch } =
    useDogs(searchParams);
  const {
    favorites,
    favoriteDogs,
    loadingFavorites,

    removeFavorite,
    toggleFavorite,

    loadFavoriteDogs,
  } = useFavorites();
  const {
    generateMatch,
    matchedDog,
    loading: matchLoading,
    error: matchError,
  } = useMatch();

  // Load favorite dogs when favorites change
  useEffect(() => {
    if (favorites.length > 0) {
      loadFavoriteDogs();
    }
  }, [favorites, loadFavoriteDogs]);

  const handleSortChange = (field: SortField, direction: "asc" | "desc") => {
    setSortBy(field);
    setSortDirection(direction);
    setCurrentPage(1); // Reset to first page when sorting
  };

  const handleToggleFavorite = (dogId: string) => {
    toggleFavorite(dogId);
  };

  const handleGenerateMatch = async () => {
    if (favorites.length === 0) {
      alert("Please add some dogs to favorites first!");
      return;
    }

    try {
      await generateMatch(favorites);
      setShowMatch(true);
    } catch (error) {
      console.error("Failed to generate match:", error);
      alert("Failed to generate match. Please try again.");
    }
  };

  const handleRemoveFavorite = (dogId: string) => {
    removeFavorite(dogId);
  };

  const handleCloseMatch = () => {
    setShowMatch(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const router = useRouter();

  const handleLogout = useCallback(async () => {
    try {
      await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      router.push("/"); // send them back to your main/login page
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Find Your Perfect Match
            </h1>
            <div className="text-sm text-gray-600 ">
              {loading
                ? "Loading..."
                : searchResults
                ? `${searchResults.total} dogs available`
                : "0 dogs available"}
              <button
                onClick={handleLogout}
                className="ml-4 px-3 py-1 text-sm font-medium text-red-600 border border-gray-300 rounded-md hover:bg-red-50 hover:border-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Filters */}
            <SearchFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              isOpen={filtersOpen}
              onToggle={() => setFiltersOpen(!filtersOpen)}
            />

            {/* Sort Controls */}
            <div className="mb-6">
              <SortControls
                sortBy={sortBy}
                sortDirection={sortDirection}
                onSortChange={handleSortChange}
              />
            </div>

            {/* Error State */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="text-red-800">
                    <strong>Error:</strong> {error}
                  </div>
                  <button
                    onClick={refetch}
                    className="ml-4 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded text-sm"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-gray-600">Loading dogs...</span>
              </div>
            )}

            {/* Results Grid */}
            {!loading && !error && (
              <>
                <SearchResults
                  dogs={dogs}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />

                {/* No Results */}
                {dogs.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-500">
                      No dogs found matching your criteria.
                    </div>
                    <button
                      onClick={() => {
                        setFilters({
                          breeds: [],
                          ageMin: "",
                          ageMax: "",
                          zipCode: "",
                        });
                        setCurrentPage(1);
                      }}
                      className="mt-2 text-blue-600 hover:text-blue-500"
                    >
                      Clear filters
                    </button>
                  </div>
                )}

                {/* Pagination */}
                {dogs.length > 0 && totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </div>

          {/* Favorites Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-6">
              <FavoritesPanel
                favorites={favorites}
                dogs={favoriteDogs}
                onGenerateMatch={handleGenerateMatch}
                onRemoveFavorite={handleRemoveFavorite}
                loading={loadingFavorites}
                matchLoading={matchLoading}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Match Modal */}
      <MatchModal
        isOpen={showMatch}
        matchedDog={matchedDog}
        onClose={handleCloseMatch}
        loading={matchLoading}
        error={matchError}
      />
    </div>
  );
};

export default SearchPage;
