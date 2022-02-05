import styled from "styled-components";

export const Root = styled.div`
   position: relative;
   width: 85%;
   height: 70vh;
   overflow: hidden;
   padding: ${({ theme: { spacing } }) => `${spacing.xlg} ${spacing.xlg}`};
   background-color: ${({ theme: { colors } }) => colors.sapphireBlue};
   border-radius: 5rem 5rem;
`;
