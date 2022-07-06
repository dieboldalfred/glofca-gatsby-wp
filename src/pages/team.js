import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// comps
import Layout from "../components/Layout"
import { Section, SectionContent, Member, Partner } from "../components"

// styles

const Team = data => {
  return (
    <Layout>
      <Section customClass="team" title="Team GLOFCA">
        <SectionContent customClass="team-center">
          {data.data.allWpTeamMember.nodes.map(member => {
            const {
              id,
              featuredImage,
              title,
              teamMemberFields: { company, position },
            } = member
            return (
              <Member
                key={id}
                image={featuredImage}
                title={title}
                position={position}
                company={company}
              />
            )
          })}
        </SectionContent>
      </Section>

      <Section
        customClass="team section--no-padding-top"
        title="Kazakhstan Partners"
      >
        <SectionContent customClass="partner-center">
          {data.data.kazakhstanPartners.nodes.map(partner => {
            const { id, featuredImage, title, slug } = partner
            return (
              <Link to={`/partners/${slug}`} className="team-center--item">
                <Partner key={id} image={featuredImage} title={title} />
              </Link>
            )
          })}
        </SectionContent>
      </Section>

      <Section
        customClass="team section--no-padding-top"
        title="Kyrgyzstan Partners"
      >
        <SectionContent customClass="partner-center">
          {data.data.kyrgyzstanPartners.nodes.map(partner => {
            const { id, featuredImage, title, slug } = partner
            return (
              <Link to={`/partners/${slug}`} className="team-center--item">
                <Partner key={id} image={featuredImage} title={title} />
              </Link>
            )
          })}
        </SectionContent>
      </Section>

      <Section
        customClass="team section--no-padding-top"
        title="Tajikistan Partners"
      >
        <SectionContent customClass="partner-center">
          {data.data.tajikistanPartners.nodes.map(partner => {
            const { id, featuredImage, title, slug } = partner
            return (
              <Link to={`/partners/${slug}`} className="team-center--item">
                <Partner key={id} image={featuredImage} title={title} />
              </Link>
            )
          })}
        </SectionContent>
      </Section>

      <Section
        customClass="team section--no-padding-top"
        title="Uzbekistan Partners"
      >
        <SectionContent customClass="partner-center">
          {data.data.uzbekistanPartners.nodes.map(partner => {
            const { id, featuredImage, title, slug } = partner
            return (
              <Link to={`/partners/${slug}`} className="team-center--item">
                <Partner key={id} image={featuredImage} title={title} />
              </Link>
            )
          })}
        </SectionContent>
      </Section>

      <Section
        customClass="team section--no-padding-top"
        title="Regional & International Partners"
      >
        <SectionContent customClass="partner-center">
          {data.data.internationalPartners.nodes.map(partner => {
            const { id, featuredImage, title, slug } = partner
            return (
              <Link to={`/partners/${slug}`} className="team-center--item">
                <Partner key={id} image={featuredImage} title={title} />
              </Link>
            )
          })}
        </SectionContent>
      </Section>
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
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 200
                  height: 200
                )
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
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 200
                  height: 200
                )
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
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 200
                  height: 200
                )
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
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 200
                  height: 200
                )
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
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 200
                  height: 200
                )
              }
            }
          }
        }
      }
    }
  }
`

export default Team
