import { motion } from "framer-motion";
export default function Badge({ children, index, key }: { children: string, index: number, key: string }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.1,
        },
      }
    }
  }
  return (
    <motion.span key={key} initial="hidden" animate="visible" whileHover={{ x: 5, rotate: 5 }} variants={variants} custom={index} className="bg-pink-500 text-white text-xs text-center align-middle font-bold py-1 px-2 shadow-xl rounded-full">{children}</motion.span>
  );
}
