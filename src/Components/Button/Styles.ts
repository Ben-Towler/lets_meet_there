import styled from 'styled-components';
import { Theme } from '../../Interfaces/Theme';
import { MouseEvent } from 'react';

interface Props {
  children: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event :MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  is?: string;
  primary?: Boolean, 
  secondary?: Boolean, 
  tertiary?: Boolean
  theme: Theme
}

export const StyledButton = styled.button`
  ${(props: Props) => props.primary && `
    background-color: ${props.theme.colors.skyBlue};
    font-size: ${props.theme.fontSizes.xsmall};
    border: none;
    margin: 20px;
    padding: 0.25em 1em;
  `}
  ${(props: Props) => props.secondary && `
    background-color: ${props.theme.colors.white};
    border-color: ${props.theme.colors.whiteSmoke};
    font-size: ${props.theme.fontSizes.xsmall};
    margin: 20px;
    padding: 0.25em 1em;
  `}
  ${(props: Props) => props.tertiary && `
    background-color: ${props.theme.colors.skyBlue};
    font-size: ${props.theme.fontSizes.small};
    border: none;
    height: 46px;
    padding: 1em 2em;
  `}
  border-radius: ${(props: Props) => props.theme.borders};
  font-family: ${(props: Props) => props.theme.fonts[0]};
  outline: none;
  color: ${(props: Props) => props.theme.colors.navyBlue};
  cursor: pointer;
`;
