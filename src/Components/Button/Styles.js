import styled from 'styled-components';

export const StyledButton = styled.button`
  ${props => props.primary && `
    background-color: ${props.theme.colors.skyBlue};
    border: none;
  `}
  ${props => props.secondary && `
    background-color: ${props.theme.colors.white};
    border-color: ${props.theme.colors.whiteSmoke};
  `}
  border-radius: ${props => props.theme.borders};
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.xsmall};
  margin: 20px;
  padding: 0.25em 1em;
  outline: none;
  color: ${props => props.theme.colors.navyBlue};
`;


// <Button primary={true} ></Button>
// <Button secondary={true} ></Button>