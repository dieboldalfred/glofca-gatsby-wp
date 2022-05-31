import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

// hooks
import { useGetTeamQuery } from "../hooks/useGetTeam"
import { useGetKazakhstanPartnersQuery } from "../hooks/useGetKazakhstanPartners"

// comps
import Layout from "../components/Layout"
import { Section, SectionContent, Member } from "../components"

// styles

const Team = ({ title, image }) => {
  // grab team from graphql
  const team = useGetTeamQuery()
  const kazakhstanPartners = useGetKazakhstanPartnersQuery()

  return (
    <Layout>
      <Section customClass="team" title="Team GLOFCA">
        <SectionContent customClass="team-center">
          {team.map(member => {
            const { id, image, name, position, company } = member
            const slug = slugify(name, { lower: true })
            return (
              <Link to={`/${slug}`}>
                <Member
                  key={id}
                  image={image}
                  name={name}
                  position={position}
                  company={company}
                />
              </Link>
            )
          })}
        </SectionContent>
      </Section>
      <Section customClass="team" title="Kazakhstan Partners">
        <SectionContent customClass="team-center">
          {kazakhstanPartners.map(member => {
            const { id, image, name } = member
            const slug = slugify(name, { lower: true })
            return (
              <Link to={`/${slug}`}>
                <Member key={id} image={image} name={name} />
              </Link>
            )
          })}
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default Team
