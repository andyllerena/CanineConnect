import React from "react";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import {
  SortField,
  SortDirection,
  SORT_OPTIONS,
  getSortLabel,
} from "@/lib/utils/sorting";

interface SortControlsProps {
  sortBy: SortField;
  sortDirection: SortDirection;
  onSortChange: (field: SortField, direction: SortDirection) => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortBy,
  sortDirection,
  onSortChange,
}) => {
  const uniqueFields = Array.from(
    new Set(SORT_OPTIONS.map((opt) => opt.field))
  );

  const handleFieldChange = (newField: SortField) => {
    // Keep current direction when changing field
    onSortChange(newField, sortDirection);
  };

  const handleDirectionToggle = () => {
    // Toggle direction for current field
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    onSortChange(sortBy, newDirection);
  };

  const currentLabel = getSortLabel(sortBy, sortDirection);

  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-4">
      <span className="text-sm font-medium text-gray-700">Sort by:</span>

      {/* Field Selector */}
      <select
        value={sortBy}
        onChange={(e) => handleFieldChange(e.target.value as SortField)}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {uniqueFields.map((field) => (
          <option key={field} value={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </option>
        ))}
      </select>

      {/* Direction Toggle Button */}
      <button
        onClick={handleDirectionToggle}
        className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        title={`Currently: ${currentLabel}`}
      >
        {sortDirection === "asc" ? (
          <ArrowUp className="w-4 h-4" />
        ) : (
          <ArrowDown className="w-4 h-4" />
        )}
        {sortDirection === "asc" ? "Ascending" : "Descending"}
      </button>

      {/* Current Sort Display */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-xs text-gray-600">
        <ArrowUpDown className="w-3 h-3" />
        <span>{currentLabel}</span>
      </div>
    </div>
  );
};

export default SortControls;
