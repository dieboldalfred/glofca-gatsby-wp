require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Glofca`,
    description: `Description`,
    author: `Eanna Freeney`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // url: `http://glofca-wp.local/graphql`,
        url: `http://wordpress.glofca.org/graphql`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `jost\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-google-sheets-flexible",
      options: {
        apiKey:
          process.env.GOOGLE_API_KEY ||
          "AIzaSyAyWuHEuONEltpIuAHkmsaglYF-OtI-NHI",
        spreadsheetUrl:
          process.env.GOOGLE_ELIBRARY_SHEET ||
          "https://docs.google.com/spreadsheets/d/182AF4HjSUn1z793MmA-cdeeU-hrt-6O5BxB2K32EO6E/edit#gid=0",
        tabName: "eLibrary",
      },
    },
    {
      resolve: "gatsby-source-google-sheets-flexible",
      options: {
        apiKey:
          process.env.GOOGLE_API_KEY ||
          "AIzaSyAyWuHEuONEltpIuAHkmsaglYF-OtI-NHI",
        spreadsheetUrl:
          process.env.GOOGLE_STAKEHOLDERS_SHEET ||
          "https://docs.google.com/spreadsheets/d/182AF4HjSUn1z793MmA-cdeeU-hrt-6O5BxB2K32EO6E/edit#gid=0",
        tabName: "Stakeholders",
      },
    },
    {
      resolve: "gatsby-source-google-sheets-flexible",
      options: {
        apiKey:
          process.env.GOOGLE_API_KEY ||
          "AIzaSyAyWuHEuONEltpIuAHkmsaglYF-OtI-NHI",
        spreadsheetUrl:
          process.env.GOOGLE_VIDEOELIBRARY_SHEET ||
          "https://docs.google.com/spreadsheets/d/182AF4HjSUn1z793MmA-cdeeU-hrt-6O5BxB2K32EO6E/edit#gid=0",
        tabName: "VideoeLibrary",
      },
    },
  ],
}
