import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react";
import TestCard2 from "./TestCard2";
import PortfolioCard from "./PortfolioCard";

export default function TestCard() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const scale = useTransform(scrollYProgress,
    [0, 1], [0.8, 1])

  return (
    <motion.div ref={ref} className="grid grid-cols-2 gap-4 relative divide-y divide-dashed">
      <PortfolioCard darkMode className="col-span-2" title="Test 1" description="Testing the description 1" />
      <PortfolioCard darkMode title="Test 2" description="Testing the description 2" />
      <PortfolioCard darkMode title="Test 3" description="Testing the description 3" />
      <PortfolioCard darkMode title="Test 4" description="Testing the description 4" />
      <PortfolioCard darkMode title="Test 5" description="Testing the description 5" />
      <PortfolioCard darkMode title="Test 6" description="Testing the description 6" />
      <PortfolioCard darkMode title="Test 7" description="Testing the description 7" />
    </motion.div>
  );
}
