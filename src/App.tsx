import "normalize.css";
import { ThemeProvider } from "styled-components";

import { Grid, Header } from "components";
import GlobalStyles from "utils/GlobalStyles";
import theme from "utils/theme";
function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Grid>
            <Header />
         </Grid>
      </ThemeProvider>
   );
}

export default App;
