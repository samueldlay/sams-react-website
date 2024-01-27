import React, { useState } from 'react';

type Image = {
  src: string;
  repoUrl: string;
};

type CarouselProps = {
  images: Image[];
};

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = (step: number) => {

    const stepThreshold =
      currentIndex === 0
        ? (images.length + step) % images.length
        : (currentIndex + step) % images.length;

    setCurrentIndex(stepThreshold);
  };

  const getImageSize = (index: number) => {
    return index === currentIndex ? 'h-64 w-64' : 'h-48 w-48 opacity-55';
  };

  return (
    <div className="flex items-center justify-center space-x-4 h-64">
      <button onClick={() => goToNext(-1)}>Prev</button>

      {images.map((image, index) => (
        <a href={image.repoUrl} key={index} target="_blank" rel="noopener noreferrer">
          <img
            src={image.src}
            className={`rounded-md object-cover transition-all duration-300 ease-linear ${getImageSize(index)}`}
            alt={`Screenshot of ${image.repoUrl}`}
          />
        </a>
      ))}
      <button onClick={() => goToNext(1)}>Next</button>
    </div>
  );
}
