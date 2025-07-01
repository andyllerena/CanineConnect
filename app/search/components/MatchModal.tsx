import React from "react";
import { Loader, AlertCircle } from "lucide-react";

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  zip_code: string;
  img: string;
}

interface MatchModalProps {
  isOpen: boolean;
  matchedDog: Dog | null;
  onClose: () => void;
  loading?: boolean;
  error?: string | null;
}

const MatchModal: React.FC<MatchModalProps> = ({
  isOpen,
  matchedDog,
  onClose,
  loading = false,
  error = null,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center">
        {loading ? (
          // Loading State
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Finding Your Match...
            </h2>
            <div className="flex justify-center mb-6">
              <Loader className="w-12 h-12 animate-spin text-blue-600" />
            </div>
            <p className="text-gray-600 mb-6">
              We&apos;re analyzing your favorites to find the perfect match!
            </p>
          </>
        ) : error ? (
          // Error State
          <>
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-gray-200 text-black rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </>
        ) : matchedDog ? (
          // Success State
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🎉 It&apos;s a Match!
            </h2>
            <img
              src={matchedDog.img}
              alt={matchedDog.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {matchedDog.name}
            </h3>
            <p className="text-gray-600 mb-2">{matchedDog.breed}</p>
            <p className="text-gray-600 mb-6">
              {matchedDog.age} years old • {matchedDog.zip_code}
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-gray-200 text-black rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Contact Shelter
              </button>
            </div>
          </>
        ) : (
          // Fallback state
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No Match Found
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn&apos;t find a match. Try adding more dogs to your
              favorites!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MatchModal;
