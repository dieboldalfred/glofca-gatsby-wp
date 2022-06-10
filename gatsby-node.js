const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const themeTemplate = path.resolve("./src/templates/ThemeTemplate.js")
  const projectTemplate = path.resolve("./src/templates/ProjectTemplate.js")
  const databaseTemplate = path.resolve("./src/templates/DatabaseTemplate.js")
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
      projects: allWpCategory(filter: { slug: { eq: "projects" } }) {
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
      },
    })
  })

  // create pages for themes
  result.data.themes.nodes.forEach(node => {
    node.pages.nodes.forEach(theme => {
      const { slug } = theme
      createPage({
        path: `/themes/${slug}`,
        component: themeTemplate,
        context: {
          slugQuery: { eq: slug },
        },
      })
    })
  })

  // // create pages for databases
  // result.data.databases.nodes.forEach(node => {
  //   node.pages.nodes.forEach(database => {
  //     const { slug } = database
  //     createPage({
  //       path: `/databases/${slug}`,
  //       component: databaseTemplate,
  //       context: {
  //         slugQuery: { eq: slug },
  //         title: "my database",
  //       },
  //     })
  //   })
  // })

  // create pages for projects
  result.data.projects.nodes.forEach(node => {
    node.pages.nodes.forEach(project => {
      const { slug } = project
      createPage({
        path: `/projects/${slug}`,
        component: projectTemplate,
        context: {
          slugQuery: { eq: slug },
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
      },
    })
  })

  // result.data.allGlofcaJson.nodes.forEach(item => {
  //   item.blogs.forEach(blog => {
  //     // const slug = slugify(blog.title, { lower: true })
  //     createPage({
  //       path: `/blog/${blog.title}`,
  //       component: blogTemplate,
  //       context: {
  //         blog,
  //       },
  //     })
  //   })
  // })

  // result.data.allGlofcaJson.nodes.forEach(item => {
  //   item.databases.forEach(database => {
  //     // const slug = slugify(blog.title, { lower: true })
  //     createPage({
  //       path: `/databases/${database.title}`,
  //       component: databaseTemplate,
  //       context: {
  //         database,
  //       },
  //     })
  //   })
  // })

  // result.data.allGlofcaJson.nodes.forEach(item => {
  //   item.team.forEach(member => {
  //     // const slug = slugify(blog.title, { lower: true })
  //     createPage({
  //       path: `/${member.name}`,
  //       component: memberTemplate,
  //       context: {
  //         member,
  //       },
  //     })
  //   })
  // })

  // result.data.allGlofcaJson.nodes.forEach(item => {
  //   item.kazakhstanPartners.forEach(member => {
  //     // const slug = slugify(blog.title, { lower: true })
  //     createPage({
  //       path: `/${member.name}`,
  //       component: memberTemplate,
  //       context: {
  //         member,
  //       },
  //     })
  //   })
  // })
}
