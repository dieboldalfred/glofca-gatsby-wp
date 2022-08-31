import React from "react"
import { graphql } from "gatsby"

import {
  Member,
  Section,
  SectionContent,
  CTAAreaTwoCol,
  Blurb,
  VideoPlayer,
} from "../components"
import Layout from "../components/Layout"

const TashkentConference2021 = ({ data }) => {
  const participants = data.allWpTeamMember.nodes
  const aboutText = data.about.tashkentConference2021
  console.log(aboutText)
  return (
    <Layout>
      <Section title="About">
        <SectionContent>
          <div className="tashkent-about">
            <div className="tashkent-about--text-box">
              <h4>{aboutText.aboutTitleA}</h4>
              <p>{aboutText.aboutTextA}</p>
            </div>
            <div className="tashkent-about--text-box">
              <h4>{aboutText.aboutTitleB}</h4>
              <p>{aboutText.aboutTextB}</p>
            </div>
            <div className="tashkent-about--text-box">
              <h4>{aboutText.aboutTitleC}</h4>
              <p>{aboutText.aboutTextC}</p>
            </div>
          </div>
        </SectionContent>
      </Section>
      <Section customClass="purple-bg" title="Talks & Presentations">
        <SectionContent></SectionContent>
      </Section>
      <Section customClass="team" title="Participants">
        <SectionContent customClass="team-center">
          {participants.map(member => {
            const {
              id,
              featuredImage,
              title,
              teamMemberFields: { position },
            } = member
            return (
              <Member
                key={id}
                image={featuredImage}
                title={title}
                position={position}
                customClass="team-member--rounded"
              />
            )
          })}
        </SectionContent>
      </Section>
      <CTAAreaTwoCol
        leftColumn={<Blurb subHeading="Watch and Download" />}
        rightColumn={
          <VideoPlayer
            videoURL="https://youtu.be/gtuwnJadS_4"
            customClass="videoplayer--shadow videoplayer--cta"
          />
        }
      />
    </Layout>
  )
}

export const query = graphql`
  query GetParticipants {
    allWpTeamMember(
      sort: { fields: date, order: ASC }
      filter: {
        categories: {
          nodes: { elemMatch: { name: { eq: "Tashkent-Conference-2021" } } }
        }
      }
    ) {
      nodes {
        id
        title
        teamMemberFields {
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
    about: wpPage(databaseId: { eq: 10098 }) {
      tashkentConference2021 {
        aboutTextA
        aboutTextB
        aboutTextC
        aboutTitleA
        aboutTitleB
        aboutTitleC
      }
    }
  }
`

export default TashkentConference2021
