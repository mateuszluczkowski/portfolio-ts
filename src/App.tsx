import "normalize.css";
import { ThemeProvider } from "styled-components";

import { AboutMeSection, Grid, Header, ThemeSwitcher } from "components";
import GlobalStyles from "utils/GlobalStyles";
import setTheme from "utils/theme";
import { useTheme } from "contexts/ThemeContext";

function App() {
   const isDarkTheme = useTheme();
   return (
      <ThemeProvider theme={setTheme(isDarkTheme)}>
         <GlobalStyles />
         <Grid>
            <ThemeSwitcher />
            <Header />
            <AboutMeSection />
         </Grid>
      </ThemeProvider>
   );
}

export default App;
