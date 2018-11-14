import styled from '../styled-components';

export const LinkText = styled.p`
  cursor: pointer;
  padding: ${(props: any) => props.theme.spacing}px
    ${(props: any) => props.theme.spacing * 2}px;
  font-size: 1.2rem;
`;
