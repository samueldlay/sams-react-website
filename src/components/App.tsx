import "./App.css";
import Menu from "./Menu"
import { createContext, useState } from "react";
import Main from "./Main";

export const ThemeContext = createContext(false);

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("theme") === "dark");

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="flex flex-col md:px-24 lg:px-36 xl:px-72 md:py-12 dark:text-gray-200 text-gray-800">
        <Menu setDarkMode={setDarkMode} />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}
