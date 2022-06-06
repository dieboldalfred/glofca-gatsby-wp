import React from "react"
import { graphql } from "gatsby"

// components
import { Hero, SectionContent } from "../components"
import Layout from "../components/Layout"

const ProjectTemplate = data => {
  const { title, featuredImage, content } = data.data.wpPage

  return (
    <Layout>
      <Hero title={title} image={featuredImage.node.localFile} />
      <SectionContent customClass="blog-center">
        <div
          className="blog--content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </SectionContent>
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
