// lib/utils/sorting.ts

export const SORT_FIELDS = {
  breed: "breed",
  name: "name",
  age: "age",
} as const;

export type SortField = keyof typeof SORT_FIELDS;
export type SortDirection = "asc" | "desc";

export interface SortOption {
  field: SortField;
  direction: SortDirection;
  label: string;
}

export const SORT_OPTIONS: SortOption[] = [
  { field: "breed", direction: "asc", label: "Breed (A-Z)" },
  { field: "breed", direction: "desc", label: "Breed (Z-A)" },
  { field: "name", direction: "asc", label: "Name (A-Z)" },
  { field: "name", direction: "desc", label: "Name (Z-A)" },
  { field: "age", direction: "asc", label: "Age (Youngest)" },
  { field: "age", direction: "desc", label: "Age (Oldest)" },
];

/**
 * Format sort field and direction for API
 */
export function formatSortParam(
  field: SortField,
  direction: SortDirection
): string {
  return `${field}:${direction}`;
}

/**
 * Parse sort parameter from API format
 */
export function parseSortParam(sortParam: string): {
  field: SortField;
  direction: SortDirection;
} {
  const [field, direction] = sortParam.split(":");
  return {
    field: field as SortField,
    direction: direction as SortDirection,
  };
}

/**
 * Get display label for sort option
 */
export function getSortLabel(
  field: SortField,
  direction: SortDirection
): string {
  const option = SORT_OPTIONS.find(
    (opt) => opt.field === field && opt.direction === direction
  );
  return option?.label || `${field} (${direction})`;
}
