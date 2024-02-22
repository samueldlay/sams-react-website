import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type DescriptionImageProps = { src: string; alt: string; parentClassName?: string; childClassName?: string; variants?: Variants; children?: ReactNode };

export default function DescriptionImage({ src, alt, children, childClassName, parentClassName }: DescriptionImageProps) {
  return (
    <div key={src} className={`w-full h-full self-center rounded-md relative overflow-hidden ${parentClassName}`}>
      {children}
      <img
        src={src}
        className={`object-cover w-full h-full ${childClassName}`}
        alt={alt}
      />
    </div>
  );
}
