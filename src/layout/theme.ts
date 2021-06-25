const breakpoints = {
  phone: 375,
  tablet: 768,
  desktop: 1200,
  huge: 1700,
}

const theme = {
  colors: {},
  weights: {
    thin: 300,
    regular: 400,
    bold: 700,
  },
  fonts: {},
  MQ: {
    phone: `@media (min-width: ${breakpoints.phone}px)`,
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
    huge: `@media (min-width: ${breakpoints.huge}px)`,
  },
}

export default theme
