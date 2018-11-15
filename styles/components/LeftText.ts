import styled from '../styled-components';

export const LeftText = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
  text-align: justify;
`;
