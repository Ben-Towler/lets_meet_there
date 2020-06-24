import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    skyBlue: '#5FDAE3',
    navyBlue: '#0D3C51',
    gothicGrey: '#6E8A97',
    gullGrey: '#9EB1B9',
    smokeWhite: '#F8F8F8'

  },
  fonts: ['Lato', 'sans-serif'],
  fontSizes: {
    xsmall: '0.6em',
    small: '0.8em',
    medium: '1.6em',
    large: '2em',
  }, 
  borders: '3px', 
  flexboxgrid: {
    'gridSize': 12,
    'gutterWidth': 1,
    'outerMargin': 0.2,
    'mediaQuery': 'only screen',
    'container': {
      'sm': 46,
      'md': 61,
      'lg': 76
    },
    'breakpoints': {
      'xs': 0,
      'sm': 48,
      'md': 64,
      'lg': 75
    }
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;