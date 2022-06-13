import React from "react"
import { graphql } from "gatsby"

// components
import { Hero, Section, SectionContent } from "../components"
import Layout from "../components/Layout"

// utils
import { sanitizeHtml, clearHtml } from "../utils/typography"

const ProjectTemplate = data => {
  const { title, featuredImage, content } = data.data.wpPage

  return (
    <Layout>
      <Hero
        title={title}
        image={featuredImage.node.localFile}
        height="medium"
        align="center"
      />
      <Section>
        <SectionContent customClass="blog-center">
          <div
            className="blog--content"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
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
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate
