import { motion, useMotionTemplate, useMotionValue, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { MouseEvent, useContext, useEffect, useRef } from "react";
import Image from "./Image";
import { ThemeContext } from "./App";


type PortfolioCardProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  repoUrl?: string;
};

export default function PortfolioCard({ title, description, className, image, repoUrl = "", onMouseEnter, onMouseLeave }: PortfolioCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log({ theme })
  }, [theme]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log({ latest });
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
      className={"transition group shadow-md md:shadow-none relative w-full bg-gray-600/10 rounded-md dark:md:bg-gray-800/35 md:bg-gray-300/35 hover:rounded-md dark:md:hover:bg-gray-900/10 md:px-8 px-2 py-16 md:hover:shadow-xl " + className}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      whileHover={{
        x: "1rem",
        transition: { duration: .3 },
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              ${theme ? "rgba(57, 58, 72, 0.25)" : "rgba(128, 134, 172, 0.25)"},
              transparent 80%
            )
          `,
        }}
      />
      <div className="md:flex-none md:block flex flex-col m-0 p-0 items-start md:items-start gap-2">
        {
          image
            ?
            <Image parentClassName="md:w-36 md:h-24 md:float-left w-3/4 h-3/4 border-2 dark:border-gray-600 border-gray-400" alt={repoUrl} src={image} />
            :
            null
        }
        <div className="flex flex-col text-pretty md:p-4 gap-1">
          <h3 className="text-md font-normal leading-7 text-pink-500">
            {title} and darkmode: {theme.toString()}
          </h3>
          <p className="text-sm dark:text-gray-300 text-gray-800">
            {description}
          </p>
        </div>
      </div>
    </ motion.div>
  );
}
