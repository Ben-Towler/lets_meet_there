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
    small: '1em',
    medium: '2em',
    large: '3em',
  }, 
  borders: '3px', 
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;