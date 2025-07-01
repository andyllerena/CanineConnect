import React from "react";

interface SortControlsProps {
  sortBy: string;
  sortDirection: "asc" | "desc";
  onSortChange: (field: string, direction: "asc" | "desc") => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortBy,
  sortDirection,
  onSortChange,
}) => {
  const sortOptions = [
    { value: "breed", label: "Breed" },
    { value: "name", label: "Name" },
    { value: "age", label: "Age" },
  ];
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-4 ">
      <span className="text-sm font-medium text-gray-700">Sort by: </span>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value, sortDirection)}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={() =>
          onSortChange(sortBy, sortDirection === "asc" ? "desc" : "asc")
        }
        className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {sortDirection === "asc" ? "↑" : "↓"}
        {sortDirection === "asc" ? " Ascending" : " Descending"}
      </button>
    </div>
  );
};

export default SortControls;
