import React from "react"
import { Blogs, Cards, Banner, Banner2, Hero } from "../components"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

// hooks
import { useGetProjectsQuery } from "../hooks/useGetProjects"
import { useGetDatabasesQuery } from "../hooks/useGetDatabases"

const HomePage = () => {
  // Graphql
  const projects = useGetProjectsQuery()
  const databases = useGetDatabasesQuery()

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
      <Blogs title="Latest News" />
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
