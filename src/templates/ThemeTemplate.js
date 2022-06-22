import React from "react"
import { graphql } from "gatsby"

// components
import { Hero, SectionContent, Section, BreadCrumb } from "../components"
import Layout from "../components/Layout"

const ThemeTemplate = data => {
  const { title, content } = data.data.wpPage

  return (
    <Layout>
      <SectionContent>
        <BreadCrumb />
      </SectionContent>
      {/* <Hero title={title} image={featuredImage.node.localFile} align="center" /> */}
      <Section title={title}>
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
  query GetThemePage($slugQuery: StringQueryOperatorInput) {
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

export default ThemeTemplate
