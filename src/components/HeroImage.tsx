import { motion, Variants } from "framer-motion";
import { ReactNode, useState } from "react";
import Button from "./Button";

type DescriptionImageProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { src?: string | undefined; alt?: string | undefined; parentClassName?: string; childClassName?: string; variants?: Variants; children?: ReactNode };

export default function DescriptionImage({ src, alt, children, childClassName, parentClassName, onMouseEnter }: DescriptionImageProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div key={src} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`w-full h-full self-center rounded-md relative overflow-hidden bg-gray-900`}>
      {children}
      <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10 gap-12 ease-in-out shadow-sm">
        <Button onClick={() => console.log("CLicked")}>{`<Code/>`}</Button>
        <Button primary onClick={() => console.log("CLicked")}>Try it out!</Button>
      </div>
      <img
        src={src}
        className={`object-cover w-full h-full ${hovered ? "md:opacity-35 md:scale-125" : ""} duration-300 ease-in-out transition`}
        alt={alt}
      />
    </div>
  );
}
