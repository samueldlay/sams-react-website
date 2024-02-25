import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import Button from "./Button";
import useScreenWidth from "../hooks/useScreenWidth";

type DescriptionImageProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { src: string; alt: string; parentClassName?: string; childClassName?: string; variants?: Variants; children?: ReactNode };

export default function DescriptionImage({ src, alt, children, childClassName, parentClassName, onMouseEnter }: DescriptionImageProps) {
  const screenWidth = useScreenWidth();
  return (
    <div key={src} onMouseEnter={onMouseEnter} className={`w-full h-full self-center rounded-md relative overflow-hidden ${parentClassName}`}>
      {children}
      {screenWidth < 700 ? <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10 gap-12 ease-in-out shadow-sm">
        <Button onClick={() => console.log("CLicked")}>{`<Code/>`}</Button>
        <Button primary onClick={() => console.log("CLicked")}>Try it out!</Button>
      </div> : null}
      <img
        src={src}
        className={`object-cover w-full h-full ${childClassName}`}
        alt={alt}
      />
    </div>
  );
}
