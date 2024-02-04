import { useState } from "react";
import DescriptionImage from "./DescriptionImage";

type Image = {
  src: string;
  repoUrl: string;
};

type ImagesProps = {
  images: Image[];
};

export default function Images({ images }: ImagesProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image, index) => (
        <DescriptionImage
          key={index}
          src={image.src}
          alt={`Screenshot of ${image.repoUrl}`}
          description={image.repoUrl} />
      ))}
    </div>
  )
}
