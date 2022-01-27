import React, { useContext, useState } from "react";
import { OnlyChilrenProps } from "interfaces";

const ThemeContext = React.createContext<boolean | null>(null);
const ThemeUpdateContext = React.createContext<() => void>(() => null);

export function useTheme() {
   return useContext(ThemeContext);
}
export function useToggleTheme() {
   return useContext(ThemeUpdateContext);
}

export default function CurrentThemeProvider({ children }: OnlyChilrenProps) {
   const [isDarkTheme, setIsDarkTheme] = useState(false);
   const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);
   return (
      <ThemeContext.Provider value={isDarkTheme}>
         <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
         </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
   );
}
