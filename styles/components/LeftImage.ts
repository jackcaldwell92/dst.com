import styled from '../styled-components';

export const LeftImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  text-align: center;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;
