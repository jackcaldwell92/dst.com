import styled from '../styled-components';

export const BodyText = styled.p`
  font-size: 1.1rem;
  color: ${(props: any) => props.theme.offWhite};
  max-width: 25vw;
  letter-spacing: 0.15rem;
  line-height: 1.8em;
  font-weight: 100;
`;
