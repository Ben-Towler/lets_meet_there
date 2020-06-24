import React from 'react'
import { StyledHeaderLogo } from './Styles.js';
import LogoSrc from '../../assets/logo.png';

function HeaderLogo() {
  return (
    <StyledHeaderLogo src={LogoSrc} alt='logo'/>
  )
}

export default HeaderLogo;
