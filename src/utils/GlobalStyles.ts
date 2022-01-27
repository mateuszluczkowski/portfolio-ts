import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
   font-size: 10px;
   font-family: 'Poppins', sans-serif;
   box-sizing: border-box;
  
}
body {
   background-color: ${({ theme: { colors } }) => colors.azure};
   color: ${({ theme: { colors } }) => colors.darkBlue};
}
h1 {
   font-size: 6rem;
}
h2 {
   font-size: 4rem;
}
h3 {
   font-size: 3rem;
}
p {
   font-size:  1.8rem;
}
`;

export default GlobalStyles;
