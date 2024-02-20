import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { ThemeContext } from "./App"
import { Dispatch, useContext } from 'react';

export default function ThemeIcon({ handleThemeChange }: { handleThemeChange: Dispatch<React.SetStateAction<boolean>> }) {
  const theme = useContext(ThemeContext);
  // if (!theme) return (
  //   <CIcon onClick={handleThemeChange} icon={icon.cilMoon} size="sm" />
  // );

  return (
    <CIcon onClick={handleThemeChange} icon={icon.cilLightbulb} size="sm" color={theme ? "white" : "black"} />
  );
}
