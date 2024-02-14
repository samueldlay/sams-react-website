import { motion, useMotionTemplate, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { MouseEvent, useEffect, useRef } from "react";
import Image from "./Image";

type PortfolioCardProps = {
  darkMode: boolean;
  title?: string;
  description?: string;
  image: string;
  repoUrl?: string;
};

export default function Demo({ darkMode, title, description, image, repoUrl }: PortfolioCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(darkMode, title, description, image, repoUrl);
  }, [darkMode, title, description, image, repoUrl])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <div
      className="sm:transform
      sm:hover:translate-x-1 sm:hover:-translate-y-1 transition duration-100 group w-screen sm:h-100vh sm:w-1/3 rounded-xl border border-slate-400/10 bg-slate-200 dark:bg-slate-800 px-8 py-8 shadow-2xl sticky top-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    // ref={ref}
    // style={{
    //   scale: scaleProgress,
    //   opacity: opacityProgress,
    // }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${darkMode ? "rgba(46, 94, 105, 0.25)" : "rgba(248, 248, 248, 0.55)"},
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }}
        key={title}
      >

        <h3 className="text-base font-semibold leading-7 dark:text-teal-500 text-pink-500">
          {title}
        </h3>
        <div className="">
          <Image alt="temp" src={image} />
        </div>
        <p className="mt-6 text-base leading-7 text-slate-300">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
