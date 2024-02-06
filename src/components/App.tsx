import "./App.css";
import Heading from "./Heading";
import Menu from "./Menu"
import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import LoremIpsum from "./LorumIpsum";
import Scroll from "./Scroll";
import { motion, useScroll } from "framer-motion";
import { CardList } from "./Cards";


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
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const localDarkMode = localStorage.getItem("darkMode");
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
    }
  }, [localDarkMode])
  return (
    <motion.div
      className="flex flex-wrap gap-4"
      transition={{ duration: .5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Heading />
      <Scroll />
      <Menu setDarkMode={setDarkMode} />
      {/* <Images images={images} /> */}
      <PortfolioCard darkMode={darkMode} />
      <PortfolioCard darkMode={darkMode} />
      <PortfolioCard darkMode={darkMode} />
      <PortfolioCard darkMode={darkMode} />
      <PortfolioCard darkMode={darkMode} />
      <LoremIpsum />
    </motion.div>

  );
}
