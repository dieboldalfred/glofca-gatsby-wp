import React from "react"
import { Blogs, Cards, Banner } from "../components"
import Layout from "../components/Layout"
import { GatsbyContext } from "../context/context"

// hooks
import { useGetProjectsQuery } from "../hooks/useGetProjects"
import { useGetDatabasesQuery } from "../hooks/useGetDatabases"

const HomePage = () => {
  // Graphql
  const projects = useGetProjectsQuery()
  const databases = useGetDatabasesQuery()

  const blurb =
    "Our mission is to provide reliable and credible information and knowledge about Glacier lake outburst floods, disaster risk reduction, and early warning systems in Central Asia to all stakeholders in the interested public."

  return (
    <Layout>
      {/* <Hero /> */}
      <Blogs title="Latest News" />
      <Banner title="Our Mission" />
      <Cards title="Projects" items={projects} />
      {/* <Banner title="Our Vision" />
      <Cards title="Themes" items={projects} /> */}
      <Banner title="Our Mission" />
      <Cards title="Databases" items={databases} />
    </Layout>
  )
}

export default HomePage
