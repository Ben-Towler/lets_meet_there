import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.navyBlue};
  font-size: ${props => props.theme.fontSizes.small};
`

export const StyledSiteHeader = styled.header`
  background-color: #fff;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  justify-content: space-between;
  align-items: center;
`