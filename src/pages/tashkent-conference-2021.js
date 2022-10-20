import React from "react"
import { graphql } from "gatsby"

// components
import { CTAAreaOneCol, VideoPlayer, Hero, Members } from "../components"
import { About, Sponsors, Talks } from "../components/Tashkent2021"
import Layout from "../components/Layout"

// styles
import "../assets/css/tashkent-conference.css"

const TashkentConference2021 = ({ data }) => {
  const coverImage = data.about.tashkentConference2021.coverImage.localFile
  const url = data.about.tashkentConference2021.video
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
      <Sponsors data={sponsorsArray} />
      <About data={aboutTextArray} />
      <Talks />
      <Members
        title="Participants with Presentations"
        data={data.allWpTeamMember.nodes}
        customClass="member--square member__image--rounded"
        link
      />
      <CTAAreaOneCol
        title="Watch"
        content={
          <VideoPlayer
            url={url}
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
          link {
            target
            url
          }
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
