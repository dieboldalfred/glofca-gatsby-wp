import React from "react"
import Layout from "../components/Layout"

// comps
import {
  CTAAreaTwoCol,
  MailchimpForm,
  Section,
  SectionContent,
  AboutContainer,
  Seo,
} from "../components"

// hooks
import { useAboutQuery } from "../hooks/useAboutQuery"

const About = () => {
  const data = useAboutQuery()

  return (
    <Layout>
      <Seo title="About" />
      <Section title="About">
        <SectionContent customClass="about">
          <AboutContainer text={data.about} />
          <AboutContainer title={data.ourMissionTitle} text={data.ourMission} />
          <AboutContainer title={data.ourVisionTitle} text={data.ourVision} />
          <AboutContainer title={data.goalsTitle} text={data.goalsText} />
          <AboutContainer
            title={data.objectivesTitle}
            text={data.objectivesText}
          />
          <AboutContainer
            title={data.valuesTitle}
            text={data.valuesText}
            last="about--container-last"
          />
        </SectionContent>
      </Section>
      {/* <CTAAreaTwoCol rightColumn={<MailchimpForm />} /> */}
    </Layout>
  )
}

export default About
