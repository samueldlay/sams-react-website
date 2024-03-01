import { motion, useMotionTemplate, useMotionValue, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { MouseEvent, useContext, useEffect, useRef } from "react";
import Image from "./Image";
import HeroImage from "./HeroImage";
import { ThemeContext } from "./App";
import Badges from "./Chips";
import Button from "./Button";
import SectionTitle from "./SectionHeader";
import SplitText from "./SplitText";
import useScreenWidth from "../hooks/useScreenWidth";


type PortfolioCardProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  className?: string;
  title?: string;
  index?: number;
  description?: string;
  post?: string;
  image?: string;
  repoUrl?: string;
  badges?: string[] | null;
};

export default function PortfolioCard({ badges, title, description, className, image, repoUrl = "", onMouseEnter, onMouseLeave, index, post }: PortfolioCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const screenWidth = useScreenWidth();

  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log({ theme })
  }, [theme]);

  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // if (latest === 0) { console.log("At the top: ", ref.current) }
    // if (latest === 1) { console.log("At the bottom: ", ref.current) }
    if (latest === -1) { console.log(ref.current) }
    console.log({ scrollY })
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
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      className={"transition group md:shadow-none relative w-full md:rounded-md dark:md:bg-gray-800/35 md:bg-gray-300/35 md:hover:rounded-md dark:md:hover:bg-gray-900/10 md:px-8 md:py-16 md:hover:shadow-xl flex flex-col gap-8 " + className}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
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
              ${theme ? "rgba(52, 53, 59, 0.25)" : "rgba(128, 134, 172, 0.25)"},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative md:flex-none md:block flex flex-col m-0 md:p-0 items-start md:gap-2 gap-6">
        {
          image
            ?
            <Image parentClassName="md:w-36 md:h-24 md:float-left w-3/4 h-3/4 md:mr-4 flex w-full justify-center relative" alt={repoUrl} src={image} />
            :
            null
        }
        <h3 className="text-2xl md:text-xl font-bold leading-7 text-pink-500 md:relative">
          {title}
        </h3>
        <p className="text-normal text-pretty dark:text-gray-300 text-gray-800">
          {description}
        </p>
        {/* <p>{post}</p> */}
        {post && screenWidth < 700 ? <SplitText className="text-sm text-pretty" text={post} /> : null}
        {/* <div className="flex flex-col text-pretty md:p-4 gap-1">
        </div> */}
      </div>
      {/* <div className="flex justify-between px-4">

        <Button onClick={() => console.log("CLicked")}>{`<Code/>`}</Button>
        <Button primary onClick={() => console.log("CLicked")}>Try it out!</Button>
      </div> */}
      {/* {badges ? <Badges badges={badges} /> : null} */}
    </ motion.div>
  );
}
