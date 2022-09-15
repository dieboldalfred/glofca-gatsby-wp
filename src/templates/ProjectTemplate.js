import React from "react"
import { graphql } from "gatsby"

// components
import { Article, BreadCrumb, Seo } from "../components"
import Layout from "../components/Layout"

const ProjectTemplate = data => {
  const { title, content } = data.data.wpPage

  return (
    <Layout>
      <Seo title={title} />
      <BreadCrumb />
      <Article title={title} content={content} />
    </Layout>
  )
}

export const query = graphql`
  query GetProjectPage($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      id
      title
      uri
      content
    }
  }
`

export default ProjectTemplate
