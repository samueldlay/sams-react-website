import { useEffect } from "react";
import LoremIpsum from "./LorumIpsum";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";


export default function Scroll() {
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress])

  return (
    <>
      <motion.div
        className="dark:bg-pink-400 bg-teal-400 h-1 w-full fixed top-0 left-0 z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
      <LoremIpsum />
    </>
  );
}
