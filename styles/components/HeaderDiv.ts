import styled from '../styled-components';

interface Props {
  opacity: number;
}

export const HeaderDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: -1;
  opacity: ${(props: any) => props.opacity};
`;
