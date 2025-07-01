"use client";
import React, { useState } from "react";
import SearchFilters from "./components/SearchFilters";
import SortControls from "./components/SortControls";
import SearchResults from "./components/SearchResults";
import FavoritesPanel from "./components/FavoritesPanel";
import MatchModal from "./components/MatchModal";
import Pagination from "./components/Pagination";

// Mock data for static development
const mockDogs = [
  {
    id: "1",
    name: "Rico",
    breed: "Labrador Retriever",
    age: 4,
    zip_code: "90210",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Jesse",
    breed: "English Springer Spaniel Cocker Spaniel Mix",
    age: 2,
    zip_code: "90028",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "King",
    breed: "English Springer Spaniel Border Collie Mix",
    age: 6,
    zip_code: "90028",
    img: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Rory",
    breed: "Chihuahua",
    age: 3,
    zip_code: "90069",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Mike",
    breed: "Golden Retriever",
    age: 5,
    zip_code: "90210",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Remi",
    breed: "German Shepherd Mix",
    age: 1,
    zip_code: "90028",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
  },
];

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

  const [sortBy, setSortBy] = useState<string>("breed");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showMatch, setShowMatch] = useState<boolean>(false);
  const [matchedDog, setMatchedDog] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 25; // Mock total pages

  const handleSortChange = (field: string, direction: "asc" | "desc") => {
    setSortBy(field);
    setSortDirection(direction);
    // TODO: Implement actual sorting logic
    console.log(`Sorting by ${field} ${direction}`);
  };

  const handleToggleFavorite = (dogId: string) => {
    setFavorites((prev) =>
      prev.includes(dogId)
        ? prev.filter((id) => id !== dogId)
        : [...prev, dogId]
    );
  };

  const handleGenerateMatch = () => {
    // TODO: Call API to generate match
    // For now, randomly select from favorites
    const randomFavorite = mockDogs.find((dog) => favorites.includes(dog.id));
    setMatchedDog(randomFavorite);
    setShowMatch(true);
  };

  const handleRemoveFavorite = (dogId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== dogId));
  };

  const handleCloseMatch = () => {
    setShowMatch(false);
    setMatchedDog(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // TODO: Implement actual pagination logic
    console.log(`Changing to page ${page}`);
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Find Your Perfect Match
            </h1>
            <div className="text-sm text-gray-600">
              {mockDogs.length} dogs available
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
              onFiltersChange={setFilters}
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

            {/* Results Grid */}
            <SearchResults
              dogs={mockDogs}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>

          {/* Favorites Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-6">
              <FavoritesPanel
                favorites={favorites}
                dogs={mockDogs}
                onGenerateMatch={handleGenerateMatch}
                onRemoveFavorite={handleRemoveFavorite}
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
      />
    </div>
  );
};

export default SearchPage;
