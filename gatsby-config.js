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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://glofca-wp.local/graphql`,
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
        apiKey: "AIzaSyAyWuHEuONEltpIuAHkmsaglYF-OtI-NHI",
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/1ByPYIoK2XyyRTDIq1u4Lf79nqzFV7xXy-j2SWQcxlzI/edit#gid=0",
        tabName: "projects",
      },
    },
  ],
}
