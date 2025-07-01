// lib/utils/queryParams.ts

import { DogSearchParams } from "../api/types";

export interface Filters {
  breeds: string[];
  ageMin: string;
  ageMax: string;
  zipCode: string;
}

/**
 * Convert frontend filters to API search parameters
 */
export function filtersToSearchParams(
  filters: Filters,
  sortBy: string,
  sortDirection: "asc" | "desc",
  page: number = 1,
  pageSize: number = 25
): DogSearchParams {
  const params: DogSearchParams = {
    size: pageSize,
    from: (page - 1) * pageSize,
    sort: `${sortBy}:${sortDirection}`,
  };

  if (filters.breeds.length > 0) {
    params.breeds = filters.breeds;
  }

  if (filters.ageMin && !isNaN(parseInt(filters.ageMin))) {
    params.ageMin = parseInt(filters.ageMin);
  }

  if (filters.ageMax && !isNaN(parseInt(filters.ageMax))) {
    params.ageMax = parseInt(filters.ageMax);
  }

  if (filters.zipCode) {
    params.zipCodes = [filters.zipCode];
  }

  return params;
}

/**
 * Parse next/prev cursor from API response
 */
export function parseCursor(cursorQuery?: string): number | undefined {
  if (!cursorQuery) return undefined;

  try {
    const url = new URL(cursorQuery, "https://example.com");
    const from = url.searchParams.get("from");
    return from ? parseInt(from) : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Calculate current page from cursor and page size
 */
export function cursorToPage(
  cursor: number | undefined,
  pageSize: number
): number {
  if (cursor === undefined || cursor === 0) return 1;
  return Math.floor(cursor / pageSize) + 1;
}

/**
 * Calculate total pages from total results and page size
 */
export function calculateTotalPages(total: number, pageSize: number): number {
  return Math.ceil(total / pageSize);
}
