import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import TestCard2 from "./TestCard2";
import PortfolioCard from "./PortfolioCard";

const cards = [{
  title: "Test 1",
  id: 1,
  description: "Testing the description 1",
  post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
  title: "Test 2",
  id: 2,
  description: "Testing the description 2",
  post: "Lorem ipsum dolor tempus etiam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
  title: "Test 3",
  id: 3,
  description: "Testing the description 3",
  post: "Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod. magna aliqua."
}, {
  title: "Test 4",
  id: 4,
  description: "Testing the description 4",
  post: "Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt."
}, {
  title: "Test 5",
  id: 5,
  description: "Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5",
  post: "Lorem tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultr"
}, {
  title: "Test 6",
  id: 6,
  description: "This is just me testing the descrption for Test 6. What do you think about it?",
  post: "Venenatis felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultr"
}, {
  title: "Test 7",
  id: 7,
  description: "Testing the description 7",
  post: "Venenatis felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultr"

}]

export default function TestCard() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  // const ref = useRef<any>(null);
  // const { scrollYProgress } = useScroll({
  //   container: ref,
  //   offset: ["start start", "end start"],
  // });

  const [activeCard, setActiveCard] = useState(0);
  const [mouseActive, setMouseActive] = useState(false);

  const demoVariants = {
    hidden: {
      // x: "12rem",
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleMouseEnter = (index: number) => {
    setActiveCard(index);
    setMouseActive(true);
  };

  const handleMouseLeave = () => {
    setMouseActive(false);
  };

  return (
    <motion.div ref={ref} className="flex gap-12 relative">
      <div className="flex flex-col gap-6 pb-96">
        {cards.map((card, index) => {
          return (
            <div onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} key={card.description + index} className={`w-full sm:w-1/2 flex-col sm:flex ${activeCard !== index && mouseActive ? "sm:opacity-40 sm:transition sm:duration-200" : ""}`}>
              <PortfolioCard title={card.title} description={card.description} />
              {index === activeCard ? <motion.div
                key={cards[activeCard]?.id}
                initial="hidden"
                animate="animate"
                variants={demoVariants}
                className="sm:p-8 flex flex-col gap-8 sm:fixed sm:right-0 top-24 sm:w-1/2 sm:h-1/3"
              >
                <motion.h1 className={`text-2xl font-semibold dark:text-gray-200 text-gray-800 ${mouseActive ? "text-pink-500" : ""}`} variants={demoVariants}>{cards[activeCard]?.title}</motion.h1>
                <motion.p variants={demoVariants}>{cards[activeCard]?.post}</motion.p>
              </motion.div> : null}
            </div>
          )
        })}
      </div>
    </motion.div>
  );
}
