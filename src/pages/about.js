import React from "react"
import Layout from "../components/Layout"

// comps
import {
  CTAArea,
  MailchimpForm,
  Section,
  SectionContent,
  AboutContainer,
} from "../components"

// hooks
import { useAboutQuery } from "../hooks/useAboutQuery"

const About = () => {
  const data = useAboutQuery()

  return (
    <Layout>
      <Section title="About">
        <SectionContent customClass="about">
          <AboutContainer title={data.aboutTitle} text={data.about} />
          <AboutContainer title={data.ourMissionTitle} text={data.ourMission} />
          <AboutContainer title={data.ourVisionTitle} text={data.ourVision} />
          <AboutContainer title={data.goalsTitle} text={data.goalsText} />
          <AboutContainer
            title={data.objectivesTitle}
            text={data.objectivesText}
          />
          <AboutContainer title={data.valuesTitle} text={data.valuesText} />
        </SectionContent>
      </Section>
      <CTAArea rightColumn={<MailchimpForm />} />
    </Layout>
  )
}

export default About
