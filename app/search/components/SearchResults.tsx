import React from "react";
import DogCard from "./DogCard";

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  zip_code: string;
  img: string;
}

interface SearchResultsProps {
  dogs: Dog[];
  favorites: string[];
  onToggleFavorite: (dogId: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  dogs,
  favorites,
  onToggleFavorite,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dogs.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          isFavorited={favorites.includes(dog.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default SearchResults;
