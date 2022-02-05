import styled from "styled-components";
export const Root = styled.div`
   display: grid;
   padding: 0 ${({ theme: { spacing } }) => spacing.xxlg};
   grid-template-rows: auto auto;
   grid-template-columns: 1fr 1fr;
   grid-template-areas: "title title" "img text";
   max-height: 100%;
   width: 100%;
   justify-items: center;
   color: ${({ theme: { colors } }) => colors.azure};
   z-index: 10;
`;
export const Title = styled.h2`
   grid-area: title;

   width: 100%;
   margin-bottom: ${({ theme: { spacing } }) => spacing.xxlg};
   text-align: center;
`;
export const Subtitle = styled.h4``;
export const ProjectImg = styled.img`
   grid-area: img;
   max-height: 50vh;
`;
export const TextWrapper = styled.div`
   grid-area: text;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;
export const Description = styled.p``;
export const GitHub = styled.a`
   text-decoration: none;
   color: inherit;
   font-size: 1.8rem;
   z-index: 1;
   line-height: 5rem;
   border: 1px solid white;
   width: 20rem;
   text-align: center;
   margin: 1rem;
   border-radius: 1rem 1rem;
`;
export const Link = styled.a`
   text-decoration: none;
   color: inherit;
   font-size: 1.8rem;
   z-index: 1;
   line-height: 5rem;
   border: 1px solid white;
   width: 20rem;
   text-align: center;
   margin: 1rem;
   border-radius: 1rem 1rem;
`;
