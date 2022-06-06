import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout"
import { Section, SectionContent } from "../components"

const PartnerTemplate = data => {
  const {
    title,
    featuredImage,
    partnerFields: { intro, roleInTheProject },
  } = data.data.wpPartner

  return (
    <Layout>
      <div>
        <GatsbyImage
          image={getImage(featuredImage?.node.localFile)}
          alt={title}
        />
      </div>
      <Section title={title}>
        <SectionContent customClass="blog-center">
          <div dangerouslySetInnerHTML={{ __html: intro }} />
          <div>Role in the Project:</div>
          <div dangerouslySetInnerHTML={{ __html: roleInTheProject }} />
        </SectionContent>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query GetPartner($slugQuery: StringQueryOperatorInput) {
    wpPartner(slug: $slugQuery) {
      title
      partnerFields {
        intro
        roleInTheProject
      }
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

export default PartnerTemplate
