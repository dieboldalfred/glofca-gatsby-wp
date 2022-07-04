const path = require("path")
const fetch = require("node-fetch")
const constants = require("./src/constants/data.js")
const WORDPRESS_BASE = `http://glofca-wp.local`
const getTranslatedCategorySlug =
  require("./utils/lang").getTranslatedCategorySlug

const languages = [
  {
    path: "/",
    code: "en",
    locale: "en_US",
  },
  {
    path: "/ru",
    code: "ru",
    locale: "ru_RU",
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
      // node.image___NODE = fileNode.id
    }
  }
}

// create resolvers for related posts in graphql
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
      themes: allWpCategory(filter: { slug: { eq: "themes" } }) {
        nodes {
          pages {
            nodes {
              slug
            }
          }
        }
      }
      themesRU: allWpCategory(filter: { slug: { eq: "themes-ru" } }) {
        nodes {
          pages {
            nodes {
              slug
            }
          }
        }
      }
      projects: allWpCategory(filter: { slug: { eq: "projects" } }) {
        nodes {
          pages {
            nodes {
              slug
            }
          }
        }
      }
      projectsRU: allWpCategory(filter: { slug: { eq: "projects-ru" } }) {
        nodes {
          pages {
            nodes {
              slug
            }
          }
        }
      }
      partners: allWpPartner {
        nodes {
          slug
        }
      }
      allWpPost {
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
  result.data.allWpPost.nodes.forEach(node => {
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

  // THEMES
  result.data.themes.nodes.forEach(node => {
    node.pages.nodes.forEach(page => {
      const { slug } = page
      createPage({
        path: `/themes/${slug}`,
        component: themeTemplate,
        context: {
          slugQuery: { eq: slug },
          lang: "en",
          locale: "en_US",
        },
      })
    })
  })

  // THEMES-RU
  result.data.themesRU.nodes.forEach(node => {
    node.pages.nodes.forEach(page => {
      const { slug } = page
      createPage({
        path: `/ru/themes/${slug}`,
        component: themeTemplate,
        context: {
          slugQuery: { eq: slug },
          lang: "ru",
          locale: "ru_RU",
        },
      })
    })
  })

  // create pages for projects
  result.data.projects.nodes.forEach(node => {
    node.pages.nodes.forEach(page => {
      const { slug } = page
      createPage({
        path: `/projects/${slug}`,
        component: projectTemplate,
        context: {
          slugQuery: { eq: slug },
          lang: "en",
          locale: "en_US",
        },
      })
    })
  })

  result.data.projectsRU.nodes.forEach(node => {
    node.pages.nodes.forEach(page => {
      const { slug } = page
      createPage({
        path: `/ru/projects/${slug}`,
        component: projectTemplate,
        context: {
          slugQuery: { eq: slug },
          lang: "ru",
          locale: "ru_RU",
        },
      })
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

  // create HOMEPAGE in english and russian
  const HomepageTemplate = path.resolve("./src/templates/index.js")
  languages.forEach(lang => {
    createPage({
      path: lang.path, // / or /ru
      component: HomepageTemplate,
      context: {
        lang: lang.code,
        locale: lang.locale,
        projectsSlug: { eq: getTranslatedCategorySlug("projects", lang.code) },
        themesSlug: { eq: getTranslatedCategorySlug("themes", lang.code) },
        pageId: lang.code === "en" ? 44 : 9824,
      },
    })
  })

  // create ABOUT in english and russian
  const AboutTemplate = path.resolve("./src/templates/about.js")
  languages.forEach(lang => {
    createPage({
      // path: lang.path + "about", // /about or /ru/about
      path: lang.path === "/ru" ? "ru/about" : "about",
      component: AboutTemplate,
      context: {
        lang: lang.code,
        locale: lang.locale,
        pageId: lang.code === "en" ? 17 : 9868,
      },
    })
  })
}

// exports.createPages = async ({ actions: { createPage } }) => {
//   const HomepageTemplate = path.resolve("./src/templates/homePageTemplate.js")
//   languages.forEach(lang => {
//     createPage({
//       path: lang.path,
//       component: HomepageTemplate,
//       context: {
//         lang: lang.code,
//       },
//     })
//   })
// }
