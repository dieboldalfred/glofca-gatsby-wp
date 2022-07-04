import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

// comps
import {
  CTAAreaTwoCol,
  MailchimpForm,
  Section,
  SectionContent,
  AboutContainer,
} from "../components"

// hooks
// import { useAboutQuery } from "../hooks/useAboutQuery"

const About = data => {
  // const data = useAboutQuery()
  console.log(data)
  const about = data?.data.wpPage.about

  return (
    <Layout>
      <Section title="About">
        <SectionContent customClass="about">
          <AboutContainer text={about.about} />
          <AboutContainer
            title={about.ourMissionTitle}
            text={about.ourMission}
          />
          <AboutContainer title={about.ourVisionTitle} about={data.ourVision} />
          <AboutContainer title={about.goalsTitle} text={about.goalsText} />
          <AboutContainer
            title={about.objectivesTitle}
            text={about.objectivesText}
          />
          <AboutContainer
            title={about.valuesTitle}
            text={about.valuesText}
            last="about--container-last"
          />
        </SectionContent>
      </Section>
      <CTAAreaTwoCol rightColumn={<MailchimpForm />} />
    </Layout>
  )
}

export const query = graphql`
  query GetAbout($pageId: Int!) {
    wpPage(databaseId: { eq: $pageId }) {
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
