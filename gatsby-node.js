const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const themeTemplate = path.resolve("./src/templates/ThemeTemplate.js")
  const projectTemplate = path.resolve("./src/templates/ProjectTemplate.js")
  const databaseTemplate = path.resolve("./src/templates/DatabaseTemplate.js")
  const blogTemplate = path.resolve("./src/templates/BlogTemplate.js")
  const memberTemplate = path.resolve("./src/templates/MemberTemplate.js")

  const result = await graphql(`
    {
      allGlofcaJson {
        nodes {
          blogs {
            title
            content
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          databases {
            title
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          team {
            id
            name
          }
          kazakhstanPartners {
            id
            name
          }
        }
      }
    }
  `)

  // Check for errors
  if (result.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, result.errors)
    return
  }

  // const themes = [
  //   {
  //     id: 1,
  //     title: "Glacier Lake Outburst Floods",
  //   },
  //   {
  //     id: 2,
  //     title: "Early Warning Systems",
  //   },
  //   {
  //     id: 3,
  //     title: "Disaster Risk Reduction",
  //   },
  // ]

  // themes.forEach(theme => {
  //   createPage({
  //     path: `/themes/${theme.title}`,
  //     component: themeTemplate,
  //     context: { theme },
  //   })
  // })

  // result.data.allGlofcaJson.nodes.forEach(blog => {
  //   // const blogSlug = slugify(blog.title, { lower: true })
  //   createPage({
  //     path: `/blog/${blog.title}`,
  //     component: projectTemplate,
  //     context: {
  //       blog,
  //     },
  //   })
  // })

  result.data.allGlofcaJson.nodes.forEach(item => {
    item.blogs.forEach(blog => {
      // const slug = slugify(blog.title, { lower: true })
      createPage({
        path: `/blog/${blog.title}`,
        component: blogTemplate,
        context: {
          blog,
        },
      })
    })
  })

  result.data.allGlofcaJson.nodes.forEach(item => {
    item.databases.forEach(database => {
      // const slug = slugify(blog.title, { lower: true })
      createPage({
        path: `/databases/${database.title}`,
        component: databaseTemplate,
        context: {
          database,
        },
      })
    })
  })

  result.data.allGlofcaJson.nodes.forEach(item => {
    item.team.forEach(member => {
      // const slug = slugify(blog.title, { lower: true })
      createPage({
        path: `/${member.name}`,
        component: memberTemplate,
        context: {
          member,
        },
      })
    })
  })

  result.data.allGlofcaJson.nodes.forEach(item => {
    item.kazakhstanPartners.forEach(member => {
      // const slug = slugify(blog.title, { lower: true })
      createPage({
        path: `/${member.name}`,
        component: memberTemplate,
        context: {
          member,
        },
      })
    })
  })
}
