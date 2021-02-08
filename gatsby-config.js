module.exports = {
  siteMetadata: {
    title: `XploreFeelings Blog`,
    description: `Help UnderStand Yourself`,
    author: `Amara`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xplorefeelings Blog`,
        short_name: `Xplorefeelings Blog`,
        start_url: `/`,
        background_color: `#9D174D`,
        theme_color: `#9D174D`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [],
      },
    },
  ],
}
