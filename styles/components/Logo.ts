import styled from '../styled-components';

export const Logo = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');
  font-family: 'Poiret One';
  font-size: 1.4rem;
  padding: 0 ${(props: any) => props.theme.spacing * 2}px;
`;
