import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components
import { Section, SectionContent } from "../components"
import Layout from "../components/Layout"

// utils
import { clearHtml } from "../utils/typography"

const BlogTemplate = data => {
  const { id, title, content, featuredImage } = data.data.wpPost

  return (
    <Layout>
      <Section title={title}>
        <SectionContent>
          <GatsbyImage
            image={getImage(featuredImage?.node.localFile)}
            alt={title}
          />
        </SectionContent>
        <SectionContent customClass="blog-center">
          {/* <div className="blog--content">{clearHtml(content)}</div> */}
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
  query GetBlogPage($slugQuery: StringQueryOperatorInput) {
    wpPost(slug: $slugQuery) {
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

export default BlogTemplate
