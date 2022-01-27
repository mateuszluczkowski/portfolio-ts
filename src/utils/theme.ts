import { DefaultTheme } from "styled-components";

import { lightThemeColors, darkThemeColors } from "./themeColors";

export function setTheme(isDarkTheme: boolean | null) {
   const theme: DefaultTheme = {
      colors: isDarkTheme ? darkThemeColors : lightThemeColors,
      media: {
         mobile: "330px",
         tablet: "479px",
         sm: "767px",
         md: "1023px",
         lg: "1199px",
         xlg: "1299px",
         xxlg: "1399px",
         xxxlg: "1599px",
      },
      spacing: {
         sm: "0.5rem",
         md: "1rem",
         lg: "2rem",
         xlg: "4rem",
         xxlg: "10rem",
         xxxlg: "20rem",
      },
      transition: "0.35s",
      font: {
         size: {
            smallest: "1.2rem",
            details: "1.4rem",
            body: "1.8rem",
            subtitle: "2rem",
            title: "2.8rem",
            header: "3.8rem",
            extra: "6rem",
         },
      },
   };

   return theme;
}

export default setTheme;
