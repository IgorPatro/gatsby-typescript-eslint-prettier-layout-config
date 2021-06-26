const breakpoints = {
  initial: 0,
  phone: 375,
  tablet: 768,
  desktop: 1200,
  huge: 1700,
}

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    text: '#414141',
  },
  weights: {
    thin: 300,
    regular: 400,
    bold: 700,
  },
  fonts: {},
  MQ: {
    initial: `@media (min-width: ${breakpoints.initial}px)`,
    phone: `@media (min-width: ${breakpoints.phone}px)`,
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
    huge: `@media (min-width: ${breakpoints.huge}px)`,
  },
}

export default theme
