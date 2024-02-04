import "./App.css";
import Heading from "./Heading";
import Menu from "./Menu"
import Images from "./Images";
import { useEffect, useState } from "react";

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
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div>
      <h1 onClick={() => setDarkTheme(!darkTheme)}>Set theme</h1>
      <Heading />
      <Menu />
      <Images images={images} />
    </div>
  );
}
