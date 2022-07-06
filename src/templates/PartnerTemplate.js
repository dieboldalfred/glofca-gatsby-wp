import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout"
import { Section, SectionContent, BreadCrumb } from "../components"

// utils
import { sanitizeHtml } from "../utils/typography"

const PartnerTemplate = ({ data, pageContext }) => {
  const {
    title,
    featuredImage,
    partnerFields: { intro, roleInTheProject },
  } = data.wpPartner

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
      <div className="partner--logo">
        <GatsbyImage
          image={getImage(featuredImage?.node.localFile)}
          alt={title}
        />
      </div>
      <Section title={title}>
        <SectionContent customClass="blog-center partner--description">
          <p
            className="partner--text"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(intro) }}
          />
          <h3 className="partner--role">Role in the Project:</h3>
          <p
            className="partner--text last--text"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(roleInTheProject),
            }}
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
              gatsbyImageData(placeholder: TRACED_SVG, width: 300, height: 300)
            }
          }
        }
      }
    }
  }
`

export default PartnerTemplate
