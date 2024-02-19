import { motion } from "framer-motion";

type DescriptionImageProps = { src: string; alt: string; className?: string; }

export default function DescriptionImage({ src, alt, className }: DescriptionImageProps) {
  return (
    <motion.div key={src} initial={{ x: 0 }} whileHover={{ x: 12, boxShadow: "10px" }} className={`w-full self-center rounded-md relative overflow-hidden ${className} mt-5`}>
      <img
        src={src}
        className={`object-cover w-full h-full`}
        alt={alt}
      />
    </motion.div>
  );
}
