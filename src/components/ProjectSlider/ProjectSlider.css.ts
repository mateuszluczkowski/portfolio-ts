import styled from "styled-components";

export const Root = styled.div`
   position: relative;
   width: 100%;
   height: 90vh;
   overflow: hidden;
   padding: ${({ theme: { spacing } }) => spacing.xxlg} 0;
   background-color: ${({ theme: { colors } }) => colors.sapphireBlue};
   border-radius: 5rem 5rem;
`;

export const Content = styled.div``;
