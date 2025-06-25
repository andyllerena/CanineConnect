"use client";
import { useState } from "react";
import dogs from "@/data/dog";
import DogCard from "./DogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sampleDogs = [
    {
      ...dogs[0],
      name: "SIERRA",
      breed: "Husky",
      age: 4,
      gender: "Female",
      location: "Rancho Cucamonga, CA",
      backgroundColor: "bg-teal-400",
    },
    {
      ...dogs[1],
      name: "RALPHIE",
      breed: "German Shepherd Dog",
      age: 3,
      gender: "Male",
      location: "Los Angeles, CA",
      backgroundColor: "bg-yellow-400",
    },
    {
      ...dogs[2],
      name: "PUMPKIN",
      breed: "Mixed Breed",
      age: 2,
      gender: "Female",
      location: "Beverly Hills, CA",
      backgroundColor: "bg-blue-400",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((i) => (i - 1 + sampleDogs.length) % sampleDogs.length);
  };

  const nextSlide = () => {
    setCurrentIndex((i) => (i + 1) % sampleDogs.length);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main carousel container with 3 visible cards */}
      <div className="relative w-full h-full flex items-center justify-center">
        {sampleDogs.map((dog, idx) => {
          // Calculate position relative to current index
          let position =
            (idx - currentIndex + sampleDogs.length) % sampleDogs.length;

          // Only show 3 cards: previous (-1), current (0), next (1)
          if (position > 2) position = position - sampleDogs.length;
          if (position < -1 || position > 1) return null;

          // Styling based on position
          const isCenter = position === 0;
          const isLeft = position === -1;
          const isRight = position === 1;

          const translateX = isCenter ? "0px" : isLeft ? "-180px" : "180px";
          const scale = isCenter ? 1 : 0.85;
          const zIndex = isCenter ? 20 : 10;
          const opacity = isCenter ? 1 : 0.7;

          return (
            <div
              key={`${dog.name}-${idx}`}
              className="absolute w-80 h-[450px] transition-all duration-300 ease-in-out cursor-pointer"
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
              }}
              onClick={() => !isCenter && setCurrentIndex(idx)}
            >
              <DogCard dog={dog} backgroundColor={dog.backgroundColor} />
            </div>
          );
        })}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-[1px] top-1/2 transform -translate-y-1/2 z-30 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 z-30 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sampleDogs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === currentIndex
                ? "bg-black scale-125"
                : "bg-gray-100 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
