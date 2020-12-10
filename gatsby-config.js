let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
      siteUrl: 'https://richardhaines.dev'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
              defaultLayouts: {
                default: require.resolve('./src/template/post-template.js')
              },
              remarkPlugins: [
                require('remark-slug')
              ]
            }
          },
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'pages',
              path: `${__dirname}/src/pages/`
            }
          },
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/posts/`,
              name: 'posts',
            },
          },
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/assets/`,
              name: 'assets'
            },
          },
          // {
          //   resolve: `gatsby-plugin-prefetch-google-fonts`,
          //   options: {
          //     fonts: [
          //       {
          //         family: `Jost`,
          //         variants: [`400`, `500`, `600`, `700`, `800`, `900`]
          //       },
          //       {
          //         family: `Open Sans`,
          //         variants: [`400`, `500`, `600`, `700`, `800`, `900`]
          //       },
          //     ],
          //   },
          // },
          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `Jost`,
                `Open Sans`,
                `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
              ],
              display: 'swap'
            }
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Rich Haines Digital Garden`,
              short_name: `Rich Haines Digital Garden`,
              start_url: `/`,
              background_color: `#ffffff`,
              theme_color: `#ffffff`,
              display: `standalone`,
              icon: `src/images/favicon.png`
            },
          },
          {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
              trackingId: process.env.GOOGLE_TRACKING_ID || 'none'
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap'
    ]
}