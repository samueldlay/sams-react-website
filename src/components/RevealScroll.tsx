"use client";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import Image from "./Image";
import PortfolioCard from "./PortfolioCard2";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    src: string;
    repoUrl: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState<number>(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // const container = useRef(null)
  // const ref = useRef(null)
  // const isInView = useInView(ref, { root: container.current, threshold: 0.5 })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      console.log({ latest, breakpoint });
      if (latest > breakpoint - 0.25 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  // useEffect(() => {
  //   console.log({ isInView });
  // }, [isInView])

  return (
    <div
      className="h-[40rem] overflow-y-auto py-16 w-screen flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => {
            // console.log({ isInView, index });
            return (
              <div ref={ref} key={item.title + index} onMouseEnter={() => setActiveCard(index)} onMouseLeave={() => setActiveCard(index)} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            )
          })}
          <div className="h-40" />
        </div>
      </div>
      {<PortfolioCard darkMode title={typeof activeCard === "number" ? content[activeCard]!.title : ""} description={typeof activeCard === "number" ? content[activeCard]!.description : ""} image={typeof activeCard === "number" ? content[activeCard]!.src : ""} repoUrl={typeof activeCard === "number" ? content[activeCard]!.repoUrl : ""} />}
    </div>
  );
};
