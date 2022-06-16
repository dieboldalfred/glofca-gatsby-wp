import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components
import { Section, SectionContent, BreadCrumb } from "../components"
import Layout from "../components/Layout"

// utils
import { sanitizeHtml, clearHtml } from "../utils/typography"

const BlogTemplate = ({ data, pageContext }) => {
  const { id, title, content, featuredImage } = data.wpPost
  console.log(data)

  return (
    <Layout>
      <SectionContent>
        <BreadCrumb
          parent={{
            uri: pageContext.uri,
            title: pageContext.title,
          }}
        />
      </SectionContent>
      <Section title={title}>
        <SectionContent customClass="blog-featured-image">
          <GatsbyImage
            image={getImage(featuredImage?.node.localFile)}
            alt={title}
          />
        </SectionContent>
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
