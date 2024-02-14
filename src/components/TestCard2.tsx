import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react";

export default function TestCard() {
  return (
    <motion.h1
      initial={{ x: 300, opacity: 0 }}
      transition={{ ease: "easeOut", duration: .5, delay: 0.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="relative text-red-500 w-screen h-64">Test1</motion.h1>
  );
}
