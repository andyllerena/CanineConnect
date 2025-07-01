import React from "react";
import { Heart, Loader } from "lucide-react";

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  zip_code: string;
  img: string;
}

interface FavoritesPanelProps {
  favorites: string[];
  dogs: Dog[];
  onGenerateMatch: () => void;
  onRemoveFavorite: (dogId: string) => void;
  loading?: boolean;
  matchLoading?: boolean;
}

const FavoritesPanel: React.FC<FavoritesPanelProps> = ({
  favorites,
  dogs,
  onGenerateMatch,
  onRemoveFavorite,
  loading = false,
  matchLoading = false,
}) => {
  const favoriteDogs = dogs.filter((dog) => favorites.includes(dog.id));

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">
          Favorites ({favorites.length})
        </h3>
        {favorites.length > 0 && (
          <button
            onClick={onGenerateMatch}
            disabled={matchLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
          >
            {matchLoading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Finding...
              </>
            ) : (
              "Find My Match!"
            )}
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Heart className="w-8 h-8 mx-auto mb-2 text-gray-300" />
          <p>No favorites yet</p>
          <p className="text-sm">Heart dogs to add them here</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {loading ? (
            <div className="flex justify-center py-4">
              <Loader className="w-5 h-5 animate-spin text-gray-400" />
              <span className="ml-2 text-sm text-gray-500">
                Loading favorites...
              </span>
            </div>
          ) : (
            favoriteDogs.map((dog) => (
              <div
                key={dog.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <img
                  src={dog.img}
                  alt={dog.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">
                    {dog.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{dog.breed}</p>
                </div>
                <button
                  onClick={() => onRemoveFavorite(dog.id)}
                  className="text-red-500 hover:text-red-700 p-1 transition-colors"
                  disabled={matchLoading}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FavoritesPanel;
