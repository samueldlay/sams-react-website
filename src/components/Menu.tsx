import ThemeIcon from "./ThemeIcon";

type MenuProps = {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
// export default function Menu({ setDarkMode }: MenuProps) {
//   const menuItems = ["Home", "About", "Work", "Contact"];
// const handleTheme = () => {
//   if (localStorage.getItem("theme") === "light") {
//     console.log("Setting dark mode")
//     localStorage.setItem("theme", "dark");
//     document.documentElement.classList.remove("light");
//     document.documentElement.classList.add("dark");
//     setDarkMode(true);
//   }
//   else {
//     console.log("Setting light mode")
//     localStorage.removeItem("theme");
//     localStorage.setItem("theme", "light");
//     document.documentElement.classList.remove("dark");
//     document.documentElement.classList.add("light");
//     setDarkMode(false);
//   }
// }

//   return (
//     <div className="z-50 flex fixed top-1 inset-12 gap-4 h-6 justify-center rounded-md">
//       {menuItems.map((item, index) => {
//         return (
//           <button className="dark:text-gray-200 text-gray-800" key={item}>
//             {item}
//           </button>
//         )
//       })}
//       {/* <button onClick={handleTheme} className="dark:text-white text-gray-800">
//         Theme
//       </button> */}
//       <ThemeIcon handleThemeChange={handleTheme} />
//     </div>
//   )
// }

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Switch from "./Switch";

export default function App({ setDarkMode }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar className="fixed bg-transparent" onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden dark:text-gray-200 text-gray-800"
        />
        <NavbarItem>
          {/* <Link color="foreground" href="#">
            Features
          </Link> */}
          <Switch onClick={handleTheme} defaultSelected aria-label="Automatic updates" />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
