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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const themeTemplate = path.resolve("./src/templates/ThemeTemplate.js")
  const projectTemplate = path.resolve("./src/templates/ProjectTemplate.js")
  const postTemplate = path.resolve("./src/templates/PostTemplate.tsx")
  const partnerTemplate = path.resolve("./src/templates/PartnerTemplate.js")

  const result = await graphql(`
    {
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
      path: `/news/${slug}`,
      component: postTemplate,
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
      path: `/project/${slug}`,
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
