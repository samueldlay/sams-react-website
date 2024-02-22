import "./App.css";
import Menu from "./Menu"
import { createContext, useEffect, useState } from "react";
import TestCard from "./TestCard";
import Badge from "./Badge";

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
];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Don't read this sentence. If you just read that previous sentence, you're already cursed 😔",
    src: "https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg",
    repoUrl: ""
  },
  {
    title: "Real time changes",
    description:
      "Don't read this sentence. If you just read that previous sentence, you're already cursed 😔",
    src: "https://c02.purpledshub.com/uploads/sites/62/2022/10/Are-any-animals-bulletproof-7271f9d.jpg?w=1029&webp=1", repoUrl: ""
  },
  {
    title: "Version control",
    description:
      "Don't read this sentence. If you just read that previous sentence, you're already cursed 😔",
    src: "https://www.timeforkids.com/wp-content/uploads/2023/11/G3G5_231117_bear_steps.jpg",
    repoUrl: ""
  },
  {
    title: "Running out of content",
    description:
      "Don't read this sentence. If you just read that previous sentence, you're already cursed 😔",
    src: "https://cms.londonzoo.org/sites/default/files/styles/responsive/public/720/840/1/2022-11/Asim-at-London-Zoo.jpg",
    repoUrl: ""
  },
];

export const ThemeContext = createContext(false);

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("theme") === "dark");

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="flex flex-col md:px-24 lg:px-36 xl:px-72 md:py-12 dark:text-gray-200 text-gray-800">
        <Menu setDarkMode={setDarkMode} />
        {/* <Badge index={1}>Hello</Badge>
        <Badge index={2}>Hello</Badge>
        <Badge index={3}>Hello</Badge>
        <Badge index={4}>Hello</Badge>
        <Badge index={5}>Hello</Badge>
        <Badge index={6}>Hello</Badge>
        <Badge index={7}>Hello</Badge>
        <Badge index={8}>Hello</Badge>
        <Badge index={9}>Hello</Badge>
        <Badge index={10}>Hello</Badge> */}
        <TestCard />
      </div>
    </ThemeContext.Provider>
  );
}
