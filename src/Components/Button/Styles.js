import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.skyBlue};
  border-radius: ${props => props.theme.borders};
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.xsmall};
  border: none;
  margin: 20px;
  padding: 0.25em 1em;
`;
