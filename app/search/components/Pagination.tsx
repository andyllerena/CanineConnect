import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-8 flex justify-center">
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-black transition-colors disabled:opacity-50"
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          {currentPage}
        </span>
        <span className="px-4 py-2 text-gray-600">of {totalPages}</span>
        <button
          onClick={handleNext}
          className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-black transition-colors disabled:opacity-50"
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
