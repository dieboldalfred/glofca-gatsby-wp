import React from "react"
import { graphql } from "gatsby"

// components
import { Hero, BreadCrumb, Section, SectionContent } from "../components"
import Layout from "../components/Layout"

// utils
import { sanitizeHtml, clearHtml } from "../utils/typography"

const ProjectTemplate = data => {
  const { title, content } = data.data.wpPage

  return (
    <Layout>
      <SectionContent>
        <BreadCrumb />
      </SectionContent>
      {/* <Hero
        title={title}
        image={featuredImage.node.localFile}
        height="medium"
        align="center"
      /> */}
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
  query GetProjectPage($slugQuery: StringQueryOperatorInput) {
    wpPage(slug: $slugQuery) {
      id
      title
      uri
      content
    }
  }
`

export default ProjectTemplate
