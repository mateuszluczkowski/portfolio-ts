import styled from "styled-components";

export const Root = styled.section`
   display: grid;
   grid-template-rows: auto;
   grid-template-columns: 1fr 1fr;
   grid-template-areas: "img text";
   width: 100%;
   height: 100vh;
`;

export const Img = styled.img`
   margin: 0;
   padding: 0;
   max-width: 100%;
   max-height: 80vh;
   border-radius: 4rem 4rem;
`;
export const PhotoPart = styled.div`
   grid-area: img;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
export const ImgWrapper = styled.div`
   position: relative;
   display: flex;

   &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: -6rem;
      left: -8rem;
      border-radius: 4rem 4rem;
      background-color: ${({ theme: { colors } }) => colors.darkBlue};
      z-index: -1;
   }
`;
export const TextWrapper = styled.div`
   grid-area: text;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding-right: ${({ theme: { spacing } }) => spacing.xxlg};
`;
export const Title = styled.h2`
   font-weight: 400;
   width: 100%;
`;
export const Subtitle = styled.p`
   width: 100%;
   line-height: 2.5rem;
`;
export const Text = styled.p`
   font-weight: 300;
   width: 100%;
   line-height: 2.5rem;
`;
