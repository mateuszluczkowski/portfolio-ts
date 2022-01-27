import { PortraitProps } from "interfaces";

import styled from "styled-components";

export const Root = styled.header`
   display: flex;
   width: 100%;
   height: 100vh;
   overflow: hidden;
`;

export const Name = styled.h1`
   width: 100%;
`;
export const SubText = styled.h2`
   font-weight: 300;
   width: 100%;
`;
export const Profession = styled.h3`
   width: 100%;
   color: ${({ theme: { colors } }) => colors.sapphireBlue};
`;
export const Text = styled.p`
   width: 100%;
`;

export const TextWrapper = styled.div`
   padding: 15rem;
   flex-basis: 50%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;
export const PhotoWrapper = styled.div`
   position: relative;
   flex-basis: 50%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

export const Portrait = styled.img<PortraitProps>`
   width: 50%;
`;

export const Background = styled.div`
   width: 200%;
   height: 200%;
   position: absolute;
   top: -50%;
   right: -130%;
   z-index: -1;
   background-color: ${({ theme: { colors } }) => colors.carolinaBlue};
   transform: rotate(45deg);
`;
