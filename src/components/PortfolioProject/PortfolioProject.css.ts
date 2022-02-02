import styled from "styled-components";
import { ProjectPropsStyled } from "interfaces";
export const Root = styled.div<ProjectPropsStyled>`
   margin: 1rem;
   grid-area: ${({ gridArea }) => gridArea};
   background-color: black;
   overflow: hidden;
   position: relative;
   transition: ${({ theme: { transition } }) => transition};
   &:hover {
      transform: scale(1.05);
      z-index: 1;
   }
`;

export const Background = styled.img`
   width: 100%;
   position: relative;
   display: block;

   }
`;

export const Elements = styled.div`
   color: ${({ theme: { colors } }) => colors.white};
   height: 100%;
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 1;
   opacity: 0;
   transition: ${({ theme: { transition } }) => transition};
   &:hover {
      opacity: 1;
   }
`;

export const GitHubLink = styled.a`
   display: block;
   color: ${({ theme: { colors } }) => colors.white};
   font-size: 1.8rem;
   cursor: pointer;
   text-decoration: none;
   color: ${({ theme: { colors } }) => colors.white};
`;
export const Link = styled.a`
   font-size: 1.8rem;
   color: ${({ theme: { colors } }) => colors.white};
   text-decoration: none;
`;
export const Title = styled.h3``;
export const Subtitle = styled.h4``;
export const Description = styled.p`
   font-size: 1.8rem;
`;
