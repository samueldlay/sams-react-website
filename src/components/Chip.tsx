import { motion } from "framer-motion";
import useScreenWidth from "../hooks/useScreenWidth";
import { Chip as NextChip } from "@nextui-org/react"

export default function Chip({ children, index, key }: { children: string, index: number, key: string }) {
  const
    screenWidth = useScreenWidth();
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
    },
    inView: (index: number) => {
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
    <motion.div
      key={key}
      initial="hidden"
      animate={screenWidth > 500 ? "visible" : ""}
      whileInView={screenWidth < 500 ? "inView" : ""}
      whileHover={{ x: 5, rotate: 5 }}
      variants={variants}
      custom={index}
      className="shadow-xl">
      <NextChip size="sm" className="bg-pink-500 text-gray-200">
        {children}</NextChip>
    </motion.div>

  );
}
