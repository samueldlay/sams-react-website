import { motion, useMotionTemplate, useMotionValue, useTransform, useScroll, useInView } from "framer-motion";
import { MouseEvent, useEffect, useRef } from "react";
import Image from "./Image";

type PortfolioCardProps = {
  darkMode: boolean;
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  repoUrl?: string;
};

export default function PortfolioCard({ darkMode, title, description, className, image, repoUrl }: PortfolioCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log({ isInView, title });
  }, [isInView, title]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      className={"sm:transform sm:hover:translate-x-1 sm:hover:-translate-y-1 transition duration-100 group relative w-full rounded-md border border-slate-400/10 bg-gray-200 dark:bg-gray-800 px-8 py-16 shadow-2xl " + className}
      onMouseMove={handleMouseMove}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      transition={{ ease: "easeOut", duration: .5, delay: 0.2 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              ${darkMode ? "rgba(81, 81, 81, 0.25)" : "rgba(248, 248, 248, 0.55)"},
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <h3 className="text-2xl font-semibold leading-7 text-pink-500">
          {title}
        </h3>
        {/* <div className="">
          <Image alt="temp" src={image!} />
        </div> */}
        <p className="mt-6 text-base leading-7 text-slate-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
