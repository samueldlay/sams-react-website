import "./App.css";
import Heading from "./Heading";
import Menu from "./Menu"
import Images from "./Images";
import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import RadialGradient from "./RadialGradient";
import LoremIpsum from "./LorumIpsum";
import Scroll from "./Scroll";
import { motion, useScroll } from "framer-motion";


const images = [
  {
    src: "https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg",
    repoUrl: ""
  },
  { src: "https://c02.purpledshub.com/uploads/sites/62/2022/10/Are-any-animals-bulletproof-7271f9d.jpg?w=1029&webp=1", repoUrl: "" },
  {
    src: "https://www.timeforkids.com/wp-content/uploads/2023/11/G3G5_231117_bear_steps.jpg",
    repoUrl: ""
  },
  {
    src: "https://cms.londonzoo.org/sites/default/files/styles/responsive/public/720/840/1/2022-11/Asim-at-London-Zoo.jpg",
    repoUrl: ""
  },
  {
    src: "https://cms.londonzoo.org/sites/default/files/styles/responsive/public/720/840/1/2022-11/Asim-at-London-Zoo.jpg",
    repoUrl: ""
  },
  {
    src: "https://cms.londonzoo.org/sites/default/files/styles/responsive/public/720/840/1/2022-11/Asim-at-London-Zoo.jpg",
    repoUrl: "Test"
  },
]

export function App() {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4"
      transition={{ duration: .5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Heading />
      <Scroll />
      <Menu />
      {/* <Images images={images} /> */}
      {/* <PortfolioCard title="Test" description="Test description" />
      <PortfolioCard title="Test" description="Test description" />
      <PortfolioCard title="Test" description="Test description" />
      <PortfolioCard title="Test" description="Test description" />
      <PortfolioCard title="Test" description="Test description" /> */}
      <RadialGradient />
      <RadialGradient />
      <RadialGradient />
      <RadialGradient />
      <RadialGradient />
      <RadialGradient />
      <LoremIpsum />
    </motion.div>

  );
}
// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

// const boxVariant = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 1, scale: .8 }
// };

// const Box = ({ num }) => {
//   const control = useAnimation();
//   const ref = useRef(null)
//   const isInView = useInView(ref)

//   useEffect(() => {
//     if (isInView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, isInView]);

//   return (
//     <motion.div
//       className="h-96 w-72 bg-slate-400"
// ref={ref}
// variants={boxVariant}
// initial="hidden"
// animate={control}
//     >
//       <h1>Box {num} </h1>
//     </motion.div>
//   );
// };

// export function App() {
//   return (
//     <div className="flex flex-col justify-center gap-12">
//       <Box num={1} />
//       <Box num={2} />
//       <Box num={3} />
//       <Box num={3} />
//       <Box num={3} />
//       <Box num={3} />
//       <Box num={3} />
//     </div>
//   );
// }
