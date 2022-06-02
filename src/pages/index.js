import React from "react"
import { Blogs, Cards, Hero, LogoBanner, Video } from "../components"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

// hooks
import { useGetProjectsQuery } from "../hooks/useGetProjects"
import { useGetDatabasesQuery } from "../hooks/useGetDatabases"
import { useLatestPostsQuery } from "../hooks/useLatestPostsQuery"

const HomePage = () => {
  // Graphql
  const projects = useGetProjectsQuery()
  const databases = useGetDatabasesQuery()
  const posts = useLatestPostsQuery()

  const data = useStaticQuery(graphql`
    {
      allGlofcaJson {
        nodes {
          mission {
            content
            title
            image {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)

  const mission = data.allGlofcaJson.nodes[0].mission

  return (
    <Layout>
      <Hero
        title="GLOFCA"
        image={mission.image}
        content="Glacier Lake Outburst Floods in Central Asia"
        align="left"
      />
      <LogoBanner />
      <Video
        title="GLOFCA Project in Action during the First Year – 2021/2022"
        videoURL="https://www.youtube.com/watch?v=avvNRswHDks"
      />
      <Blogs title="Latest News" posts={posts} showLink />
      <Hero
        title={mission.title}
        image={mission.image}
        content={mission.content}
      />
      <Cards title="Databases" items={databases} />
    </Layout>
  )
}

export default HomePage
