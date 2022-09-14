import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// data
import { DayOne, DayTwo, DayThree } from "../data/tashkent2021"

// components
import {
  Member,
  Section,
  SectionContent,
  CTAAreaTwoCol,
  Blurb,
  VideoPlayer,
  Hero,
} from "../components"
import Layout from "../components/Layout"

const TalkSection = ({ title, chair, chairs, speakers, points }) => (
  <>
    <h4 className="text__coloured">{title}</h4>
    {chair && (
      <p>
        <a
          href={DayOne.partOne.chair.link}
          target="_blank"
          className="text__italicised"
        >
          {DayOne.partOne.chair.name}
        </a>
        , {DayOne.partOne.chair.desc}
      </p>
    )}
    {chairs && (
      <p>
        Co-chairs:{" "}
        {chairs.map((chair, i) => {
          const { name, desc } = chair
          return (
            <span key={i} className="text__italicised">
              {name}, {desc}
              {", "}
            </span>
          )
        })}
      </p>
    )}
    {speakers &&
      speakers.map((speaker, i) => {
        return (
          <p>
            <a
              key={i}
              href={speaker.link}
              target="_blank"
              className="text__coloured"
            >
              {speaker.name}
            </a>
            , {speaker.desc}
          </p>
        )
      })}
    {points && (
      <ul className="discs">
        {points.map((point, i) => {
          return (
            <li key={i} className="disc">
              {point}
            </li>
          )
        })}
      </ul>
    )}
  </>
)

const TashkentConference2021 = ({ data }) => {
  const participants = data.allWpTeamMember.nodes
  const coverImage = data.about.tashkentConference2021.coverImage.localFile
  const video = data.about.tashkentConference2021.video
  const aboutTextArray = [
    {
      title: data.about.tashkentConference2021.aboutTitleA,
      text: data.about.tashkentConference2021.aboutTextA,
    },
    {
      title: data.about.tashkentConference2021.aboutTitleB,
      text: data.about.tashkentConference2021.aboutTextB,
    },
    {
      title: data.about.tashkentConference2021.aboutTitleC,
      text: data.about.tashkentConference2021.aboutTextC,
    },
  ]
  const sponsors = data.about.tashkentOrganisersAndSponsors
  const sponsorsArray = [
    sponsors.one.localFile,
    sponsors.two.localFile,
    sponsors.three.localFile,
    sponsors.four.localFile,
    sponsors.five.localFile,
    sponsors.six.localFile,
  ]
  return (
    <Layout>
      <Hero
        image={coverImage}
        content="Reducing Vulnerabilities of Populations in the Central Asia Region from Glacier Lake Outburst Floods (GLOF) in a changing climate"
        subText="UNESCO-Adaptation Fund GLOFCA First Regional Exchange Workshop / 18-19 November 2021"
        height="full"
      />
      <Section title="Organisers & Sponsors">
        <SectionContent customClass="tashkent__sponsors">
          {sponsorsArray.map((sponsor, i) => {
            console.log(sponsor)
            return (
              <div>
                <GatsbyImage
                  image={getImage(sponsor)}
                  className="tashkent__sponsor"
                />
              </div>
            )
          })}
        </SectionContent>
      </Section>
      <Section title="About" customClass="tashkent-section__image">
        <SectionContent customClass="tashkent-about">
          {aboutTextArray.map((text, i) => {
            return (
              <div key={i} className="tashkent-about--text-box">
                <h5 className="text__coloured">{text.title}</h5>
                <p>{text.text}</p>
              </div>
            )
          })}
        </SectionContent>
      </Section>
      <Section customClass="purple-bg" title="Talks & Presentations">
        <SectionContent>
          <div className="tashkent-talks">
            <div className="tashkent-talk talk-a">
              <TalkSection
                title={DayOne.partOne.title}
                chair={DayOne.partOne.chair}
                speakers={DayOne.partOne.speakers}
              />
              <TalkSection
                title={DayOne.overview.title}
                speakers={DayOne.overview.speakers}
              />
              <TalkSection
                title={DayOne.sessionOne.title}
                chairs={DayOne.sessionOne.chairs}
                speakers={DayOne.sessionOne.speakers}
              />
              <TalkSection
                title={DayOne.sessionTwo.title}
                chairs={DayOne.sessionTwo.chairs}
                speakers={DayOne.sessionTwo.speakers}
              />
              <TalkSection
                title={DayOne.sessionThree.title}
                chairs={DayOne.sessionThree.chairs}
                speakers={DayOne.sessionThree.speakers}
              />
              <TalkSection
                title={DayOne.sessionFour.title}
                chairs={DayOne.sessionFour.chairs}
                speakers={DayOne.sessionFour.speakers}
              />
              <TalkSection
                title={DayOne.sessionFive.title}
                chair={DayOne.sessionFive.chair}
                points={DayOne.sessionFive.points}
              />
              <TalkSection
                title={DayOne.sessionSix.title}
                chair={DayOne.sessionSix.chair}
                speakers={DayOne.sessionSix.speakers}
              />
              <TalkSection
                title={DayOne.sessionSeven.title}
                chair={DayOne.sessionSeven.chair}
              />
            </div>
            <div className="tashkent-talk talk-b">
              <TalkSection
                title={DayTwo.partOne.title}
                chair={DayTwo.partOne.chair}
                points={DayTwo.partOne.points}
              />
              <TalkSection
                title={DayTwo.partTwo.title}
                chair={DayTwo.partTwo.chair}
                points={DayTwo.partTwo.points}
              />
              <TalkSection
                title={DayTwo.partThree.title}
                chair={DayTwo.partThree.chair}
                points={DayTwo.partThree.points}
              />
            </div>
            <div className="tashkent-talk talk-c">
              <TalkSection
                title={DayThree.partOne.title}
                chair={DayThree.partOne.chair}
                points={DayThree.partOne.points}
              />
              <TalkSection
                title={DayThree.partTwo.title}
                points={DayThree.partTwo.points}
              />
            </div>
          </div>
        </SectionContent>
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
        leftColumn={<Blurb subHeading="Watch" />}
        rightColumn={
          <VideoPlayer
            videoURL={video}
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
        video
        coverImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      tashkentOrganisersAndSponsors {
        one {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        two {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        three {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        four {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        five {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        six {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default TashkentConference2021
