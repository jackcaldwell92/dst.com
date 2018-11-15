import styled from '../styled-components';

export const WideBodyText = styled.p`
  font-size: 1.5rem;
  color: ${(props: any) => props.theme.offWhite};
  max-width: 66vw;
  letter-spacing: 0.15rem;
  text-align: center;
  line-height: 2.5rem;
`;
