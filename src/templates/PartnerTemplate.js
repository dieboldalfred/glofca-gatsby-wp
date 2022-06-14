import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout"
import { Section, SectionContent, BreadCrumb } from "../components"

// utils
import { sanitizeHtml, clearHtml } from "../utils/typography"

const PartnerTemplate = ({ data, pageContext }) => {
  console.log(data)
  const {
    title,
    featuredImage,
    partnerFields: { intro, roleInTheProject },
  } = data.wpPartner
  const pageTitle = pageContext.title
  const pageURI = pageContext.uri

  return (
    <Layout>
      <SectionContent>
        <BreadCrumb
          parent={{
            uri: pageURI,
            title: pageTitle,
          }}
        />
      </SectionContent>
      <div className="partner--logo">
        <GatsbyImage
          image={getImage(featuredImage?.node.localFile)}
          alt={title}
        />
      </div>
      <Section title={title}>
        <SectionContent customClass="blog-center">
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(intro) }} />
          <div>Role in the Project:</div>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(roleInTheProject) }}
          />
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
