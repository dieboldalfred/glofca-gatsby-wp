import React from "react"
import { Banner } from "../components"
import Layout from "../components/Layout"

const ProjectTemplate = ({ pageContext: { project } }) => {
  return (
    <Layout>
      <Banner title={project.title} />
    </Layout>
  )
}

export default ProjectTemplate
