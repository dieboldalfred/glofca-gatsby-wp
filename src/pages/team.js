import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// comps
import Layout from "../components/Layout"
import { Section, SectionContent, Member } from "../components"

// styles

const Team = data => {
  const KazName = data.data.kazakhstanPartners.nodes[0].name

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

      <Section customClass="team" title={KazName}>
        <SectionContent customClass="team-center">
          {data.data.kazakhstanPartners.nodes[0].partners.nodes.map(partner => {
            const { id, featuredImage, title, slug } = partner
            return (
              <Link to={`/partners/${slug}`}>
                <Member key={id} image={featuredImage} title={title} />
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
    allWpTeamMember {
      nodes {
        id
        title
        slug
        teamMemberFields {
          company
          position
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
    kazakhstanPartners: allWpCategory(
      filter: { name: { eq: "Kazakhstan Partners" } }
    ) {
      nodes {
        name
        partners {
          nodes {
            id
            title
            slug
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
      }
    }
  }
`

export default Team
