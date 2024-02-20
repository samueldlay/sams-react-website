import { useState } from "react";

type DescriptionImageProps = { src: string; alt: string; description: string; }

export default function DescriptionImage({ src, alt, description }: DescriptionImageProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="w-screen rounded-md relative overflow-hidden h-64 md:w-1/3 md:h-72">
      <p className="text-2xl text-center transform -translate-x-10 transition ease-in-out duration-300 absolute z-10 top-0 right-0 text-slate-50">{description}</p>
      <div className="transition duration-300 ease-in-out hover:opacity-30 bg-slate-900 w-full h-full">
        <img
          src={src}
          className={`object-cover w-full h-full`}
          alt={alt}
        />
      </div>
    </div>
  );
}
