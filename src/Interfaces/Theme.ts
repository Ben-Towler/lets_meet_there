

export interface Theme {
  colors: {
    skyBlue: string,
    navyBlue: string,
    gothicGrey: string,
    gullGrey: string,
    whiteSmoke: string,
    white: string
  },
  fonts: string[],
  fontSizes: {
    xsmall: string,
    small: string,
    medium: string,
    large: string,
  }, 
  borders: string,
  flexboxgrid: {
    'gridSize': number,
    'gutterWidth': number,
    'outerMargin': number,
    'mediaQuery': string,
    'container': {
      'sm': number,
      'md': number,
      'lg': number
    },
    'breakpoints': {
      'xs': number,
      'sm': number,
      'md': number,
      'lg': number
    }
  }
}