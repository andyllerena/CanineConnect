import React from "react";
import { Filter, ChevronDown } from "lucide-react";

interface Filters {
  breeds: string[];
  ageMin: string;
  ageMax: string;
  zipCode: string;
}

interface SearchFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const mockBreeds = [
  "Labrador Retriever",
  "English Springer Spaniel Cocker Spaniel Mix",
  "English Springer Spaniel Border Collie Mix",
  "Chihuahua",
  "Golden Retriever",
  "German Shepherd Mix",
  "Beagle",
  "Bulldog",
  "Poodle",
];

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm transition-all duration-300 ${
        isOpen ? "mb-6" : "mb-4"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 rounded-2xl transition-colors"
      >
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-semibold text-gray-900">Filters</span>
          {(filters.breeds.length > 0 || filters.ageMin || filters.ageMax) && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Breed Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Breed
              </label>
              <select
                multiple
                className="w-full p-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.breeds}
                onChange={(e) => {
                  const values = Array.from(
                    e.target.selectedOptions,
                    (option) => option.value
                  );
                  onFiltersChange({ ...filters, breeds: values });
                }}
              >
                {mockBreeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Hold Ctrl/Cmd to select multiple
              </p>
            </div>

            {/* Age Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full p-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filters.ageMin}
                  onChange={(e) =>
                    onFiltersChange({ ...filters, ageMin: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full p-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filters.ageMax}
                  onChange={(e) =>
                    onFiltersChange({ ...filters, ageMax: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="90210"
                className="w-full p-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.zipCode}
                onChange={(e) =>
                  onFiltersChange({ ...filters, zipCode: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
