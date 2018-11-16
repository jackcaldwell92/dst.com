import styled from '../styled-components';

export const WideBodyText = styled.p`
  font-size: 1.2rem;
  color: ${(props: any) => props.theme.offWhite};
  max-width: 55vw;
  letter-spacing: 0.25rem;
  text-align: center;
  line-height: 3rem;
`;
