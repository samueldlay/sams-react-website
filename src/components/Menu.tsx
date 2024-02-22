import ThemeIcon from "./ThemeIcon";

type MenuProps = {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Menu({ setDarkMode }: MenuProps) {
  const menuItems = ["Home", "About", "Work", "Contact"];
  const handleTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      console.log("Setting dark mode")
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
    else {
      console.log("Setting light mode")
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setDarkMode(false);
    }
  }

  return (
    <div className="z-50 flex fixed top-1 inset-12 gap-4 h-6 justify-center rounded-md">
      {menuItems.map((item, index) => {
        return (
          <button className="dark:text-gray-200 text-gray-800" key={item}>
            {item}
          </button>
        )
      })}
      {/* <button onClick={handleTheme} className="dark:text-white text-gray-800">
        Theme
      </button> */}
      <ThemeIcon handleThemeChange={handleTheme} />
    </div>
  )
}
