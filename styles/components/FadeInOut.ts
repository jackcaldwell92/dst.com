import styled, { keyframes } from '../styled-components';

const fadeInOut = keyframes`
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

export const FadeInOut = styled.h1`
  animation: 3s ${fadeInOut} ease-in-out;
  opacity: 0;
`;
