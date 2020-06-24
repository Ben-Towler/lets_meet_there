import React, {MouseEvent} from 'react';
import { StyledButton } from './Styles';

interface Props {
  children: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event :MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  is?: string;
}

function Button ({children, ...props}: Props): JSX.Element {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
