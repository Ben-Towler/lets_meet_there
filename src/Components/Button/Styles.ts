import styled from 'styled-components';

export const StyledButton = styled.button`
  ${props => props.primary && `
    background-color: ${props.theme.colors.skyBlue};
    font-size: ${props.theme.fontSizes.xsmall};
    border: none;
    margin: 20px;
    padding: 0.25em 1em;
  `}
  ${props => props.secondary && `
    background-color: ${props.theme.colors.white};
    border-color: ${props.theme.colors.whiteSmoke};
    font-size: ${props.theme.fontSizes.xsmall};
    margin: 20px;
    padding: 0.25em 1em;
  `}
  ${props => props.tertiary && `
    background-color: ${props.theme.colors.skyBlue};
    font-size: ${props.theme.fontSizes.small};
    border: none;
    height: 46px;
    padding: 1em 2em;
  `}
  border-radius: ${props => props.theme.borders};
  font-family: ${props => props.theme.fonts[0]};
  outline: none;
  color: ${props => props.theme.colors.navyBlue};
  cursor: pointer;
`;
