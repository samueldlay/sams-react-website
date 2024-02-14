type MenuProps = {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Menu({ setDarkMode }: MenuProps) {
  const menuItems = ["Home", "About", "Work", "Contact"];
  const handleTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
    else {
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }

  return (
    <div className="z-50 flex fixed top-1 inset-12 gap-4 h-6 justify-center rounded-md">
      {menuItems.map((item, index) => {
        return (
          <button className="text-white opacity-100" key={item}>
            {item}
          </button>
        )
      })}
      <button onClick={handleTheme} className="text-white opacity-100">
        Theme</button>
    </div>
  )
}
