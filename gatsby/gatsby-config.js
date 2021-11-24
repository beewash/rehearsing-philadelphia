// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    // convert to dynamic (this should be sourced from Sanity)
    title: 'Rehearsing Philadelphia',
    description: 'A metascore by Ari Benjamin',
    author: 'Bryan Washington: bryanwashington.000 | bryanwashington@gmail.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-portal`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        apiVersion: '2021-08-31',
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "ibfjhn1r",
        dataset: "production",
        token: process.env.SANITY_READ_TOKEN
      },
    },
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: ['/:', '\:', '/'],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        ignore: [
          '/node_modules/slick-carousel/slick/slick.css',
          '/node_modules/slick-carousel/slick/slick-theme.css',
          '/node_modules/sal.js/dist/sal.css'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-klaviyo',
      options: {
        klaviyoKey: 'T6mASD',
        enableDuringDevelop: true, // Optional. Disables Klaviyo when running Gatsby dev server. Defaults to true.
      },
    }
  ]
}

