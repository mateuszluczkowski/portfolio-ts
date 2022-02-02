import styled from "styled-components";

import { ProjectSliderNavProps } from "interfaces";

export const Root = styled.div`
   position: relative;
   width: 100%;
   height: 100vh;
   overflow: hidden;
   padding: ${({ theme: { spacing } }) => spacing.xxlg} 0;
`;

export const Navigation = styled.div`
   width: 100%;
   height: 100%;
   z-index: 10;
   position: absolute;
`;

export const ArrowButton = styled.button<ProjectSliderNavProps>`
   position: absolute;
   top: 50%;
   ${({ isLeft }) => (isLeft === 1 ? "left: 0" : "right: 0")};
   transform: translateY(-50%);
`;

export const Dots = styled.ul``;
export const SingleDot = styled.li``;

export const Content = styled.div``;
