const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'MiraClinic',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        layout: path.join(__dirname, 'src/layout'),
        components: path.join(__dirname, 'src/components'),
      },
    },
  ],
}
