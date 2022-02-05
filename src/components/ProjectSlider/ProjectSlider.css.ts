import styled from "styled-components";

import { ProjectSliderNavProps } from "interfaces";

export const Root = styled.div`
   position: relative;
   width: 100%;
   height: 90vh;
   overflow: hidden;
   padding: ${({ theme: { spacing } }) => spacing.xxlg} 0;
   background-color: ${({ theme: { colors } }) => colors.sapphireBlue};
   border-radius: 5rem 5rem;
`;

export const Navigation = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
`;

export const ArrowButton = styled.button<ProjectSliderNavProps>`
   position: absolute;
   padding: ${({ theme: { spacing } }) => spacing.xlg};
   top: 50%;
   transform: translateY(-50%);
   ${({ isLeft }) => (isLeft === 1 ? "left: 0" : "right: 0")};
   font-size: 3rem;
   background-color: transparent;
   border: none;
   color: ${({ theme: { colors } }) => colors.azure};
   cursor: pointer;
   opacity: 0.8;
   transition: ${({ theme: { transition } }) => transition};
   &:hover {
      opacity: 1;
   }
   &.disabled {
      opacity: 0;
      cursor-events: none;
   }
`;

export const Dots = styled.ul`
   display: flex;
   padding: ${({ theme: { spacing } }) => spacing.xlg};
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
   font-size: 1rem;
   color: ${({ theme: { colors } }) => colors.azure};
   list-style: none;
`;
export const SingleDot = styled.li`
   margin: 0 ${({ theme: { spacing } }) => spacing.md};
   height: 1rem;
   width: 1rem;
   border-radius: 50%;
   background-color: ${({ theme: { colors } }) => colors.azure};
   cursor: pointer;
   opacity: 0.6;
   transition: ${({ theme: { transition } }) => transition};
   &:hover {
      opacity: 0.8;
   }
   &.active {
      transform: scale(1.8);
      opacity: 1;
   }
`;

export const Content = styled.div``;
