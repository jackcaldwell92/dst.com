import styled from '../styled-components';

export const Navbar = styled.div`
  align-items: center;
  display: flex;
  background: ${(props: any) => props.theme.teal};
  width: 100%;
  color: ${(props: any) => props.theme.offWhite};
  justify-content: space-between;
  opacity: 0.9;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.1);
`;
