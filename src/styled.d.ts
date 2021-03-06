import "styled-components";

declare module "styled-components" {
   export interface DefaultTheme {
      colors: {
         white: string;
         black: string;
         darkGray: string;
         darkBlue: string;
         sapphireBlue: string;
         celadonBlue: string;
         carolinaBlue: string;
         azure: string;
      };
      media: {};
      media: {
         mobile: string;
         tablet: string;
         sm: string;
         md: string;
         lg: string;
         xlg: string;
         xxlg: string;
         xxxlg: string;
      };
      spacing: {
         sm: string;
         md: string;
         lg: string;
         xlg: string;
         xxlg: string;
         xxxlg: string;
      };
      transition: string;
      font: {
         size: {
            smallest: string;
            details: string;
            body: string;
            subtitle: string;
            title: string;
            header: string;
            extra: string;
         };
      };
   }
}
