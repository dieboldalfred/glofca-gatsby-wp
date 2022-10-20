import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/Layout"

// comps
import {
  Section,
  SectionContent,
  AboutContainer,
  Seo,
  VideoPlayer,
} from "../components"

type GraphQlResult = {
  wpPage: {
    about: {
      about: string
      ourMission: string
      ourVision: string
      aboutTitle: string
      ourMissionTitle: string
      ourVisionTitle: string
      goalsTitle: string
      goalsText: string
      objectivesTitle: string
      objectivesText: string
      valuesTitle: string
      valuesText: string
    }
  }
}

const About: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const {
    about,
    ourMissionTitle,
    ourVisionTitle,
    ourMission,
    ourVision,
    goalsText,
    goalsTitle,
    objectivesText,
    objectivesTitle,
    valuesText,
    valuesTitle,
  } = data.wpPage.about

  return (
    <Layout>
      <Seo title="About" />
      <Section title="About">
        <SectionContent customClass="about">
          <AboutContainer text={about} />
          <AboutContainer title={ourMissionTitle} text={ourMission} />
          <AboutContainer title={ourVisionTitle} text={ourVision} />
          <AboutContainer title={goalsTitle} text={goalsText} />
          <AboutContainer title={objectivesTitle} text={objectivesText} />
          <AboutContainer
            title={valuesTitle}
            text={valuesText}
            last="about--container-last"
          />
          {/* <VideoPlayer
            url="https://www.youtube.com/watch?v=KnOU1poR_TE&t=8s"
            customClass="videoplayer--shadow videoplayer--cta"
          /> */}
        </SectionContent>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(slug: { eq: "about" }) {
      about {
        about
        ourMission
        ourVision
        aboutTitle
        ourMissionTitle
        ourVisionTitle
        goalsTitle
        goalsText
        objectivesTitle
        objectivesText
        valuesTitle
        valuesText
      }
    }
  }
`

export default About
