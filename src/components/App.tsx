import "./App.css";
import Heading from "./Heading";
import Menu from "./Menu"
import Portfolio from "./Portfolio";

export function App() {
  return (
    <div className="prose">
      {/* <Portfolio /> */}
      <Menu />
      <Heading />
    </div>
  );
}
