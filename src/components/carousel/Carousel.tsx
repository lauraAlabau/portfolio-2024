import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type CarouselProps = {
  children: React.ReactNode[];
};

export const Carousel = ({ children: images }: CarouselProps) => {
  const [position, setPosition] = useState(0);

  const handlePrev = () =>
    setPosition((position) =>
      position === 0 ? images.length - 1 : position - 1
    );

  const handleNext = () =>
    setPosition((position) =>
      position === images.length - 1 ? 0 : position + 1
    );

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${position * 100}%)` }}
      >
        {images}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          onClick={handlePrev}
          className="p-1 rounded-full shadow text-slate-800/80 hover:text-slate-800 bg-slate-100/80 hover:bg-slate-100 hover:shadow-md"
        >
          <BiChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={handleNext}
          className="p-1 rounded-full shadow text-slate-800/80 hover:text-slate-800 bg-slate-100/80 hover:bg-slate-100 hover:shadow-md"
        >
          <BiChevronRight className="w-8 h-8" />
        </button>
      </div>
      <div className="absolute left-0 right-0 bottom-4">
        <div className="flex items-center justify-center gap-2">
          {images.map((image, idx) => (
            <div
              key={String(image) + idx}
              className={`transition-all w-1.5 h-1.5  rounded-full shadow-inner  ${
                position === idx
                  ? "p-0.5 bg-red-400"
                  : "bg-opacity-50 bg-slate-100 shadow-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
