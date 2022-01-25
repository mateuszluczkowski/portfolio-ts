import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
   colors: {
      white: "#ffff",
      black: "#000",
      darkGray: "#545454",
      orange: "#F8BE97",
   },
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
export default theme;
