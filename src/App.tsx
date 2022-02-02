import "normalize.css";
import { ThemeProvider } from "styled-components";

import {
   AboutMeSection,
   Grid,
   Header,
   PortfolioSection,
   ThemeSwitcher,
} from "components";
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
            <PortfolioSection />
         </Grid>
      </ThemeProvider>
   );
}

export default App;
