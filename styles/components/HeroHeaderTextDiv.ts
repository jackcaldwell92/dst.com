import styled from '../styled-components';

interface Props {
  opacity: number;
  translateAmount: number;
}

export const HeroHeaderTextDiv = styled.div<Props>`
  text-align: center;
  opacity: ${(props: any) => props.opacity};
  transform: translate(0, ${(props: any) => props.translateAmount}px);
`;
