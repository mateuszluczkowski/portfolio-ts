import { PortraitProps } from "interfaces";

import styled from "styled-components";

export const Root = styled.div`
   display: flex;
   width: 100%;
   height: 100vh;
`;

export const Name = styled.h1``;
export const SubText = styled.h2``;
export const Profession = styled.h3``;
export const Text = styled.p``;

export const TextWrapper = styled.div`
   flex-basis: 50%;
`;
export const PhotoWrapper = styled.div`
   flex-basis: 50%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

export const Portrait = styled.img<PortraitProps>`
   width: 50%;
`;
