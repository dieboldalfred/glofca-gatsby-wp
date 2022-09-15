import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// comps
import Layout from "../components/Layout"
import { Members, Partners } from "../components"

const Team = data => {
  const teamGLOFCA = data.data.allWpTeamMember.nodes
  const kazakhPartners = data.data.kazakhstanPartners.nodes
  const kyrgyzPartners = data.data.kyrgyzstanPartners.nodes
  const tajikiPartners = data.data.tajikistanPartners.nodes
  const uzbekiPartners = data.data.uzbekistanPartners.nodes
  const internationalPartners = data.data.internationalPartners.nodes

  return (
    <Layout>
      <Members title="Team GLOFCA" data={teamGLOFCA} />
      <Partners
        title="Kazakhstan Partners"
        data={kazakhPartners}
        customClass="section--no-padding-top"
      />
      <Partners
        title="Kyrgyzstan Partners"
        data={kyrgyzPartners}
        customClass="section--no-padding-top"
      />
      <Partners
        title="Tajikistan Partners"
        data={tajikiPartners}
        customClass="section--no-padding-top"
      />
      <Partners
        title="Uzbekistan Partners"
        data={uzbekiPartners}
        customClass="section--no-padding-top"
      />
      <Partners
        title="Regional & International Partners Partners"
        data={internationalPartners}
        customClass="section--no-padding-top"
      />
    </Layout>
  )
}

export const query = graphql`
  query GetTeamAndPartners {
    allWpTeamMember(
      sort: { fields: date, order: ASC }
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Team GLOFCA" } } } }
      }
    ) {
      nodes {
        id
        title
        teamMemberFields {
          company
          position
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, height: 500)
              }
            }
          }
        }
      }
    }
    kazakhstanPartners: allWpPartner(
      sort: { fields: date, order: ASC }
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "kazakhstan-partners" } } }
        }
      }
    ) {
      nodes {
        title
        slug
        id
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, width: 200)
              }
            }
          }
        }
      }
    }
    kyrgyzstanPartners: allWpPartner(
      sort: { fields: date, order: ASC }
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "kyrgyzstan-partners" } } }
        }
      }
    ) {
      nodes {
        title
        slug
        id
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, width: 200)
              }
            }
          }
        }
      }
    }
    tajikistanPartners: allWpPartner(
      sort: { fields: date, order: ASC }
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "tajikistan-partners" } } }
        }
      }
    ) {
      nodes {
        title
        slug
        id
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, width: 200)
              }
            }
          }
        }
      }
    }
    uzbekistanPartners: allWpPartner(
      sort: { fields: date, order: ASC }
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "uzbekistan-partners" } } }
        }
      }
    ) {
      nodes {
        title
        slug
        id
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, width: 200)
              }
            }
          }
        }
      }
    }
    internationalPartners: allWpPartner(
      sort: { fields: date, order: ASC }
      filter: {
        categories: {
          nodes: {
            elemMatch: { slug: { eq: "regional-and-international-partners" } }
          }
        }
      }
    ) {
      nodes {
        title
        slug
        id
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, width: 200)
              }
            }
          }
        }
      }
    }
  }
`

export default Team
