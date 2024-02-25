import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <motion.h1
      initial={{
        y: 0,
      }}
      whileInView={{
        y: -100,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.h1>
  );
};

export default SectionTitle;
