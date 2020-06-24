import React from 'react'
import { StyledHeroImage } from './Styles.js';
import HeroSrc from '../../assets/heroImage.jpg';

function HeroImage() {
  return (
    <StyledHeroImage src={HeroSrc} alt='hero'/>
  )
}

export default HeroImage;