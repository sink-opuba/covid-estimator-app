module.exports = {
  siteMetadata: {
    title: `CovidEstimator`,
    description: `A simple novel Covid-19 infection estimator`,
    author: `@sink-opuba`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        alwaysSendReferrer: true,
        forceSSL: true,
      },
    },
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
        name: `covid-estimator`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#545488`,
        theme_color: `#545488`,
        display: `minimal-ui`,
        icon: `src/images/corona-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
