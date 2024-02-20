import { motion, Variants } from "framer-motion";

type DescriptionImageProps = { src: string; alt: string; parentClassName?: string; childClassName?: string; variants?: Variants };

export default function DescriptionImage({ src, alt, childClassName, parentClassName }: DescriptionImageProps) {
  return (
    <div key={src} className={`w-full h-full self-center rounded-md relative overflow-hidden ${parentClassName} mt-5`}>
      {/* <div className="absolute w-full h-1/3 hover:bg-black hover:opacity-50 blur-sm duration-200 z-10 bottom-0" /> */}
      <img
        src={src}
        className={`object-cover w-full h-full ${childClassName}`}
        alt={alt}
      />
    </div>
  );
}
