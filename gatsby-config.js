module.exports = {
  siteMetadata: {
    title: `CovidEstimator`,
    description: `A simple yet novel Covid-19 infection impact estimator`,
    author: `@sink-opuba`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly: ["components/", /*'/main.css',*/ "bootstrap/"], // Purge only these files/folders
      },
    },
  ],
}
