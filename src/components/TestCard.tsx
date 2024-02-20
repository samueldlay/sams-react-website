import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import TestCard2 from "./TestCard2";
import PortfolioCard from "./PortfolioCard";
import useScreenWidth from "../hooks/useScreenWidth";
import Image from "./Image";

const cards = [{
  title: "Test 1",
  image: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg",
  id: 1,
  description: "Testing the description 1",
  post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
  title: "Test 2",
  image: "https://media.4-paws.org/c/e/0/f/ce0f0d38552bcb7be9897b2b9c970ae2700ed8d3/VIER%20PFOTEN_2018-07-18_221-3779x2615-1920x1329.jpg",
  id: 2,
  description: "Testing the description 2",
  post: "Lorem ipsum dolor tempus etiam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
  title: "Test 3",
  image: "https://www.japantimes.co.jp/uploads/imported_images/uploads/2023/07/np_file_236274.jpeg",
  id: 3,
  description: "Testing the description 3",
  post: "Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod. magna aliqua."
}, {
  title: "Test 4",
  image: "https://source.wustl.edu/wp-content/uploads/2023/04/MLTM-507_0073_1920-1280x700.jpg",
  id: 4,
  description: "Testing the description 4",
  post: "Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt."
}, {
  title: "Test 5",
  image: "https://cdn.vox-cdn.com/thumbor/eomH7ai274c9V2CpR2QoanXfdUs=/0x194:1548x968/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19539772/cats4.jpg",
  id: 5,
  description: "Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5Testing the description 5",
  post: "Lorem tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultr"
}, {
  title: "Test 6",
  image: "https://www.eastvalleyanimal.com/wp-content/uploads/2023/01/oscar-fickel-H2dn8UayTH8-unsplash-1080x675.jpg",
  id: 6,
  description: "This is just me testing the descrption for Test 6. What do you think about it?",
  post: "Venenatis felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultr"
}, {
  title: "Test 7",
  image: "https://twin-cities.umn.edu/sites/twin-cities.umn.edu/files/Pallas%27scat2.png",
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

  const screenWidth = useScreenWidth();

  const [activeCard, setActiveCard] = useState(0);
  const [mouseActive, setMouseActive] = useState(false);

  const demoVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: screenWidth < 700 ? 0 : 1,
    },
    animate: {
      opacity: screenWidth < 700 ? 1 : 1,
      scale: 1,
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
      <div className="flex flex-col gap-6 md:pb-96">
        {cards.map((card, index) => {
          return (
            <div onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} key={card.description + index} className={`w-full md:w-1/2 flex-col md:flex ${activeCard !== index && mouseActive ? "md:opacity-40 md:transition md:duration-200" : ""}`}>
              <PortfolioCard image={card.image} title={card.title} description={card.description} />
              {
                index === activeCard ? <motion.div
                  key={cards[activeCard]?.id}
                  initial="hidden"
                  animate="animate"
                  variants={demoVariants}
                  className="md:p-8 flex flex-col gap-8 md:fixed md:right-56 md:top-0 md:bottom-0 md:h-[90vh] md:overflow-y-scroll mt-8 md:w-1/3"
                >
                  <motion.h1 className={`text-2xl font-semibold dark:text-gray-200 text-gray-800 hover:text-pink-500`} variants={demoVariants}>{cards[activeCard]?.title}</motion.h1>
                  <motion.p variants={demoVariants}>{cards[activeCard]?.post} and {screenWidth}</motion.p>
                  {screenWidth > 700 ? <motion.div className="w-full md:h-96" variants={demoVariants}>
                    <Image childClassName="md:hover:scale-125 duration-200 transition-transform" src={cards[activeCard]?.image} alt={cards[activeCard]?.title} />
                  </motion.div> : null}
                </motion.div> : null
              }
            </div>
          )
        })}
      </div>
    </motion.div>
  );
}
