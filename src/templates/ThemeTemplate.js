import React from "react"
import { Hero, SectionContent } from "../components"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

// utils
import { clearHtml, cutString } from "../utils/typography"

const ThemeTemplate = data => {
  return (
    <Layout>
      <Hero
        title={data.data.wpPage?.title}
        image={data.wpPage?.featuredImage.node.localFile}
      />
      <SectionContent customClass="blog-center">
        <div className="blog--content">{clearHtml(data.wpPage?.content)}</div>
      </SectionContent>
    </Layout>
  )
}

export const query = graphql`
  query GetThemePage($slug: StringQueryOperatorInput) {
    wpPage(slug: $slug) {
      id
      title
      uri
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                outputPixelDensities: 1.5
              )
            }
          }
        }
      }
    }
  }
`

export default ThemeTemplate
