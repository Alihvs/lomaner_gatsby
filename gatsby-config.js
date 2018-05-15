module.exports = {
  siteMetadata: {
    title: 'Lomaner 3rd try',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`
  ],
}
