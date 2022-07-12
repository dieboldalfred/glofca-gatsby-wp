const path = require("path")
const fetch = require("node-fetch")

const WORDPRESS_BASE = `http://glofca-wp.local`

const languages = [
  {
    path: "/",
    code: "en_US",
  },
  {
    path: "/ru",
    code: "ru",
  },
]

// create schema for related posts - yarpp
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WpPost implements Node {
      related_posts: WpNodePost!
    }

    type WpNodePost implements Node {
      nodes: [WpPost]
    }
  `
  createTypes(typeDefs)
}

// create image nodes from google sheets plugin
const { createRemoteFileNode } = require("gatsby-source-filesystem")
exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode } = actions
  if (node.internal.type === "projectsSheetsData") {
    const fileNode = await createRemoteFileNode({
      url: node.featuredimage,
      store,
      cache,
      createNode,
      parentNodeId: node.id,
      createNodeId,
    })
    if (fileNode) {
      node.localFeaturedImage___NODE = fileNode.id
    }
  }
}

// create resolvers for YARPP related posts in graphql
exports.createResolvers = ({ createResolvers, schema }) =>
  createResolvers({
    WpPost: {
      related_posts: {
        resolve: async (source, args, context, info) => {
          const { databaseId } = source

          const response = await fetch(
            `${WORDPRESS_BASE}/wp-json/yarpp/v1/related/${databaseId}`
          ).then(res => res.json())

          if (response && response.length) {
            const result = await context.nodeModel.runQuery({
              query: {
                filter: { databaseId: { in: response.map(({ id }) => id) } },
              },
              type: "WpPost",
            })
            return { nodes: result }
          } else return { nodes: [] }
        },
      },
    },
  })

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const themeTemplate = path.resolve("./src/templates/ThemeTemplate.js")
  const projectTemplate = path.resolve("./src/templates/ProjectTemplate.js")
  const blogTemplate = path.resolve("./src/templates/BlogTemplate.js")
  const partnerTemplate = path.resolve("./src/templates/PartnerTemplate.js")

  const result = await graphql(`
    {
      # themes: allWpCategory(filter: { slug: { eq: "themes" } }) {
      #   nodes {
      #     pages {
      #       nodes {
      #         slug
      #       }
      #     }
      #   }
      themes: allWpPage(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "themes" } } } }
        }
      ) {
        nodes {
          slug
        }
      }
      projects: allWpPage(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "projects" } } } }
        }
      ) {
        nodes {
          slug
        }
      }
      partners: allWpPartner {
        nodes {
          slug
        }
      }
      news: allWpPost {
        nodes {
          slug
        }
      }
    }
  `)

  // Check for errors
  if (result.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, result.errors)
    return
  }

  // create pages for blogs
  result.data.news.nodes.forEach(node => {
    const { slug } = node
    createPage({
      path: `/blog/${slug}`,
      component: blogTemplate,
      context: {
        slugQuery: { eq: slug },
        uri: "/news",
        title: "News",
      },
    })
  })

  // create pages for themes
  result.data.themes.nodes.forEach(node => {
    const { slug } = node
    createPage({
      path: `/themes/${slug}`,
      component: themeTemplate,
      context: {
        slug: slug,
      },
    })
  })

  // create pages for projects
  result.data.projects.nodes.forEach(node => {
    const { slug } = node
    createPage({
      path: `/projects/${slug}`,
      component: projectTemplate,
      context: {
        slug: slug,
      },
    })
  })

  // create pages for all partners
  result.data.partners.nodes.forEach(node => {
    const { slug } = node
    createPage({
      path: `/partners/${slug}`,
      component: partnerTemplate,
      context: {
        slugQuery: { eq: slug },
        uri: "/team",
        title: "Team",
      },
    })
  })
}
