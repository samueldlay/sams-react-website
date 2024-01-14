import "./App.css";
import Heading from "./Heading";
import Menu from "./Menu"

export function App() {
  return (
    <div className="flex flex-col content-end items-end gap-4">
      <Menu />
      <Heading />
    </div>
  );
}
