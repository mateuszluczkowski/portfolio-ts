import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { Circle, Icon, Root } from "./ThemeSwitcher.css";
import { useTheme, useToggleTheme } from "contexts/ThemeContext";

export default function ThemeSwitcher() {
   const isDarkTheme = useTheme();
   const handleThemeSwitcher = useToggleTheme();
   console.log(isDarkTheme);
   return (
      <Root onClick={() => handleThemeSwitcher()}>
         <Circle isDarkTheme={isDarkTheme} />
         <Icon>
            <FontAwesomeIcon icon={faSun} />
         </Icon>
         <Icon>
            <FontAwesomeIcon icon={faMoon} />
         </Icon>
      </Root>
   );
}
