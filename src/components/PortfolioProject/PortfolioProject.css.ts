import styled from "styled-components";
import { ProjectImgProps } from "interfaces";
export const Root = styled.div`
   display: grid;
   padding: 0 ${({ theme: { spacing } }) => spacing.xlg};
   grid-template-rows: auto auto;
   grid-template-columns: 1fr 1fr;
   grid-template-areas: "title title" "img text";
   max-height: 100%;
   width: 100%;
   justify-items: center;
   align-items: center;
   color: ${({ theme: { colors } }) => colors.azure};
   z-index: 10;
`;
export const Title = styled.h2`
   grid-area: title;
   width: 100%;
   margin-bottom: 7.5rem;
   text-align: center;
`;
export const Subtitle = styled.h4``;

export const ProjectImg = styled.div<ProjectImgProps>`
   grid-area: img;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 42rem;
   height: 100%;
   overflow: hidden;
   background: url(${({ background }) => background});
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
   padding: 0 ${({ theme: { spacing } }) => spacing.xlg};
   height: 100%;
   grid-area: text;
   display: flex;
   flex-direction: column;
   justify-content: start;
`;
export const Description = styled.p`
   height: 8rem;
`;
export const GitHub = styled.a`
   width: 20rem;
   color: ${({ theme: { colors } }) => colors.darkBlue};
   background-color: ${({ theme: { colors } }) => colors.azure};
   font-size: 1.8rem;
   text-align: center;
   text-decoration: none;
   line-height: 5rem;
   border: 1px solid white;
   border-radius: 1rem 1rem;
   z-index: 1;
`;
export const ButtonsWrapper = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
`;
export const Link = styled.a`
   width: 20rem;
   background-color: ${({ theme: { colors } }) => colors.azure};
   color: ${({ theme: { colors } }) => colors.darkBlue};
   font-size: 1.8rem;
   text-decoration: none;
   text-align: center;
   line-height: 5rem;
   border: 1px solid white;
   border-radius: 1rem 1rem;
   z-index: 1;
`;
