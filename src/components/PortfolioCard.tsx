import { motion, useMotionTemplate, useMotionValue, useTransform, useScroll, useInView, useMotionValueEvent } from "framer-motion";
import { MouseEvent, useContext, useEffect, useRef } from "react";
import Image from "./Image";
import { ThemeContext } from "./App";

type PortfolioCardProps = {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  repoUrl?: string;
};

export default function PortfolioCard({ title, description, className, image = "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg", repoUrl }: PortfolioCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

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
      className={"transition group relative w-full hover:bg-inherit bg-gray-600/10 rounded-sm sm:bg-inherit hover:rounded-sm dark:sm:hover:bg-gray-900/10 sm:hover:bg-gray-200 px-8 py-16 hover:shadow-2xl " + className}
      onMouseMove={handleMouseMove}
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
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              ${theme ? "rgba(70, 70, 70, 0.25)" : "rgba(248, 248, 248, 0.25)"},
              transparent 80%
            )
          `,
        }}
      />
      <div className="sm:flex-none sm:block flex flex-col items-start sm:items-start gap-4">
        {
          image
            ?
            <Image className="sm:w-1/4 sm:h-1/4 sm:float-left w-3/4 h-3/4" alt="temp" src={image} />
            :
            null
        }
        <div className="flex flex-col text-pretty sm:p-4 gap-4">
          <h3 className="text-lg font-normal leading-7 text-pink-500">
            {title} and darkmode: {theme.toString()}
          </h3>
          <p className="text-md dark:text-gray-300 text-gray-800">
            {description}
          </p>
        </div>
      </div>
    </ motion.div>
  );
}
