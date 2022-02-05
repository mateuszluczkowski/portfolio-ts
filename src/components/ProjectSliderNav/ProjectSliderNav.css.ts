import styled from "styled-components";
import { ProjectSliderButton } from "interfaces";
export const Root = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
`;

export const ArrowButton = styled.button<ProjectSliderButton>`
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
export const SingleDotWrapper = styled.li`
   padding: 2rem;
   cursor: pointer;
   &:hover div {
      opacity: 0.8;
   }
`;
export const SingleDot = styled.div`
   height: 0.8rem;
   width: 0.8rem;
   border-radius: 50%;
   background-color: ${({ theme: { colors } }) => colors.azure};
   opacity: 0.5;
   transition: ${({ theme: { transition } }) => transition};
   &:hover {
      opacity: 0.8;
   }
   &.active {
      transform: scale(1.4);
      opacity: 1;
   }
`;
