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
      aboutTitle: string
      about: string
      ourMissionTitle: string
      ourMission: string
      ourVisionTitle: string
      ourVision: string
      goalsTitle: string
      goalsText: string
      valuesTitle: string
      valuesText: string
    }
  }
}

const About: React.FC<PageProps<GraphQlResult>> = ({ data }) => {
  const {
    about,
    aboutTitle,
    ourMissionTitle,
    ourVisionTitle,
    ourMission,
    ourVision,
    goalsText,
    goalsTitle,
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
        valuesTitle
        valuesText
      }
    }
  }
`

export default About
