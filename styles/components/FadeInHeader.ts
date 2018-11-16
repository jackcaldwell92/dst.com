import styled, { keyframes } from '../styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const FadeInHeader = styled.h1`
  animation: 3s ${fadeIn};
  opacity: 0;
`;
