import React from "react"
import { graphql } from "gatsby"

// components
import { BreadCrumb, Section, SectionContent } from "../components"
import Layout from "../components/Layout"

const ProjectTemplate = data => {
  const { title, content } = data.data.wpPage

  return (
    <Layout>
      <SectionContent>
        <BreadCrumb />
      </SectionContent>
      <Section title={title}>
        <SectionContent customClass="blog-center">
          <div
            className="blog--content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </SectionContent>
      </Section>
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
