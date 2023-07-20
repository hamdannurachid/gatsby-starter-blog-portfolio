const { lazy } = require("react")

module.exports = {
  siteMetadata: {
    title: `Hamdan Nurachid`,
    author: {
      name: `Hamdan Nurachid`,
      summary: `UI UX Design Portfolio with 3 years experience and familiar in creating Learnin Management System (LMS) products.`,
    },
    twitterHandle: '@swashata',
    url: 'http://localhost:8000/',
    description: `UI UX Design Portfolio - Hamdan Nurachid | Completed projects for 10+ companies, including LMS, company profiles, and design systems. Passionate about problem-solving in product design.`,
    siteUrl: `https://dev-hamdannur.netlify.app/`,
    social: {
      twitter: `hamdannur`,
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`, ignore: [`**/\.*`]

      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false,
              loading: 'lazy',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hamdan Nurachid`,
        short_name: `hamdannur`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hamdan-ava.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,


    {
      resolve: `@decantyme/gatsby-plugin-modal-routing`,
      // options: {
      //   // A selector to set react-modal's app root to, default is `#___gatsby`
      //   // See http://reactcommunity.org/react-modal/accessibility/#app-element
      //   appElement: '#___gatsby',

      //   // Object of props that will be passed to the react-modal container
      //   // See http://reactcommunity.org/react-modal/#usage
      //   modalProps: {
      //     modal: false
      //   },
      // }
    },

    {
      resolve: `gatsby-plugin-modal-routing-3`,
      // options: {
      //   // A selector to set react-modal's app root to, default is `#___gatsby`
      //   // See http://reactcommunity.org/react-modal/accessibility/#app-element
      //   appElement: '#___gatsby',

      //   // Object of props that will be passed to the react-modal container
      //   // See http://reactcommunity.org/react-modal/#usage
      //   modalProps: {
      //     modal: false
      //   },
      // }
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-1R0524XP4C", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,

        },
      },
    },


  ],
}
