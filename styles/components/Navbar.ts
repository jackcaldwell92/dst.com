import styled from '../styled-components';

export const Navbar = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  color: ${(props: any) => props.theme.offWhite};
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
`;
