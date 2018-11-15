import styled from 'styled-components';

export const Button = styled.button`
  margin: ${props => props.theme.spacing * 5}px;
  padding: ${props => props.theme.spacing}px
    ${props => props.theme.spacing * 2}px;
  font-size: 1.3rem;
  background: linear-gradient(
    45deg,
    ${props => props.theme.iceBlue},
    ${props => props.theme.lightGrey}
  );
  color: ${props => props.theme.darkGrey};
  border-radius: 1.4rem;
  border: none;
  cursor: pointer;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  :hover {
    transform: scale(1.05);
  }
`;
