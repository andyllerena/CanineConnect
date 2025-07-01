import React from "react";
import { Heart, Calendar, MapPin } from "lucide-react";

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  zip_code: string;
  img: string;
}

interface DogCardProps {
  dog: Dog;
  isFavorited: boolean;
  onToggleFavorite: (dogId: string) => void;
}

const DogCard: React.FC<DogCardProps> = ({
  dog,
  isFavorited,
  onToggleFavorite,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img src={dog.img} alt={dog.name} className="" />
        <button
          onClick={() => onToggleFavorite(dog.id)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm border transition-all duration-200 ${
            isFavorited
              ? "bg-red-500 border-red-500 text-white"
              : "bg-white/80 border-white/60 text-gray-600 hover:bg-red-50 hover:text-red-500"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{dog.name}</h3>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <span className="font-medium">{dog.breed}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>
                {dog.age} {dog.age === 1 ? "year" : "years"} old
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{dog.zip_code}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
