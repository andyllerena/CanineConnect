import { Heart } from "lucide-react";

export default function DogCard({ dog }: { dog: any }) {
  return (
    <div
      className={`
        w-full h-full
        ${dog.backgroundColor || "bg-white"}
        rounded-3xl
        shadow-xl
        overflow-hidden
        flex flex-col
        relative
      `}
    >
      {/* Photo section */}
      <div className="relative flex-1 p-6">
        <img
          src={dog.imageUrl}
          alt={dog.name}
          className="w-full h-64 object-cover rounded-2xl"
        />

        {/* Favorite button */}
        <button className="absolute top-8 right-8 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow">
          <Heart className="w-6 h-6 text-gray-500 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Info section */}
      <div className="px-6 pb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{dog.name}</h2>
        <p className="text-lg text-gray-800 mb-3">{dog.breed}</p>
        <div className="text-base text-gray-700">
          <p>
            {dog.gender || "Unknown"}, {dog.age} Yrs
          </p>
          <p className="mt-1">{dog.location || "Location not specified"}</p>
        </div>
      </div>
    </div>
  );
}
