import styled from "styled-components";

export const Root = styled.section`
   display: flex;
   align-items: center;
   flex-direction: column;
   min-height: 100vh;
`;

export const Title = styled.h2`
   font-size: 5.2rem;
   font-weight: 600;
`;

export const Subtitle = styled.p``;

export const Grid = styled.div`
   margin: ${({ theme: { spacing } }) => spacing.xlg};
   display: grid;
   width: 80%;
   height: 50rem;
   grid-template-columns: 2fr 1fr 1fr;
   grid-template-rows: auto;
   grid-template-areas: "mainProject project1 project2" "mainProject project3 project4";
`;
