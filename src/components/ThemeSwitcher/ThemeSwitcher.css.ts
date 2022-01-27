import styled from "styled-components";

interface ThemeSwitcherProps {
   isDarkTheme: boolean | null;
}

export const Root = styled.div`
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem 0.3rem;
   background-color: ${({ theme: { colors } }) => colors.azure};
   top: 1rem;
   right: 1rem;
   width: 5.5rem;
   height: 3.1em;
   border: 1px solid ${({ theme: { colors } }) => colors.azure};
   border-radius: 4rem;
   cursor: pointer;
   z-index: 1;
`;

export const Circle = styled.div<ThemeSwitcherProps>`
   position: absolute;
   right: ${({ isDarkTheme }) => (isDarkTheme ? "97%" : "3%")};
   transform: translateX(${({ isDarkTheme }) => (isDarkTheme ? "100%" : "0")});
   width: 2.5rem;
   height: 2.5rem;
   border-radius: 50%;
   background-color: ${({ theme: { colors } }) => colors.darkBlue};
   transition: ${({ theme: { transition } }) => transition};
`;

export const Icon = styled.span`
   margin: 0;
   padding: 0;
   font-size: 2rem;
   color: #c9ac06;
   & + span {
      color: inherit;
   }
`;
