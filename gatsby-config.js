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
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Rich Haines Blog`,
              short_name: `Rich Haines Blog`,
              start_url: `/`,
              background_color: `#ffffff`,
              theme_color: `#ffffff`,
              display: `standalone`,
              icon: `./src/assets/favicon.png`
            },
          },
          {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
              trackingId: process.env.GOOGLE_TRACKING_ID || 'none'
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
          resolve: 'gatsby-plugin-brotli',
          options: {
            extensions: ['css', 'html', 'js', 'svg']
          }
        },
        'gatsby-plugin-minify',
        {
          resolve: `gatsby-plugin-feed-mdx`,
          options: {
            query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
              }
            `,
            feeds: [
              {
                serialize: ({ query: { site, allMdx } }) => {
                  return allMdx.edges.map(edge => {
                    return Object.assign({}, edge.node.frontmatter, {
                      description: edge.node.excerpt,
                      url: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
                      custom_elements: [{ "content:encoded": edge.node.html }]
                    });
                  });
                },
                query: `
                  {
                    allMdx {
                      edges {
                        node {
                          excerpt
                          html
                          fields { slug }
                          frontmatter {
                            title
                          }
                        }
                      }
                    }
                  }
                `,
                output: "/rss.xml",
                title: "Rich Haines Blog RSS Feed",
              }
            ]
          }
        }
    ]
}