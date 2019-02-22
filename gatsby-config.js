module.exports = {
  siteMetadata: {
    title: `Verified Views`,
    description: `Welcome to Verified Views - the podcast series brought to you by SEENConnects.com, the innovative influencer marketing agency.`,
    author: `@seenconnects`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/episodes/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F0E345`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg` // This path is relative to the root of the site.
      }
    }
  ]
};
