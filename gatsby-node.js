const path = require("path")
// const slugify = require("slugify")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const themeTemplate = path.resolve("./src/templates/ThemeTemplate.js")
  const projectTemplate = path.resolve("./src/templates/ProjectTemplate.js")
  const blogTemplate = path.resolve("./src/templates/BlogTemplate.js")

  const result = await graphql(`
    {
      allGlofcaJson {
        nodes {
          blogs {
            title
          }
        }
      }
    }
  `)

  console.log("-------------------data------------------")
  console.log(result.data.allGlofcaJson.nodes[0].blogs)

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
      // const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/blog/${blog.title}`,
        component: blogTemplate,
        context: {
          blog,
        },
      })
    })
  })
}
