require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Glofca`,
    description: `Our mission is to provide reliable and credible information and knowledge Glacier Lake Outburst Flood (GLOFs), Disaster Risk Reduction (DRR) and Early Warning Systems (EWS) in Central Asia to all stakeholders and the interested public.`,
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
        url: process.env.REMOTE_WORDPRESS || `https://wordpress.glofca.org/graphql`,
        // url: process.env.REMOTE_WORDPRESS,
        // url: process.env.REMOTE_WORDPRESS || `http://glofca-wp.local/graphql`,
        // url: `http://glofca-wp.local/graphql`,
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
