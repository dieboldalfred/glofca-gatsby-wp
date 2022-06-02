import React from "react"
import Layout from "../components/Layout"
import { Section, SectionContent } from "../components"

// hooks
import { useAboutQuery } from "../hooks/useAboutQuery"

const About = () => {
  const data = useAboutQuery()
  console.log(data.wpPage.about)

  return (
    <Layout>
      <Section title="About">
        <SectionContent customClass="about">
          <div className="about--container">
            <div className="about--header">
              <h2>{data.wpPage.about.aboutTitle}</h2>
            </div>
            <div className="about--description">{data.wpPage.about.about}</div>
          </div>
          <div className="about--container">
            <div className="about--header">
              <h2>{data.wpPage.about.ourMissionTitle}</h2>
            </div>
            <div className="about--description">
              {data.wpPage.about.ourMission}
            </div>
          </div>
          <div className="about--container">
            <div className="about--header">
              <h2>{data.wpPage.about.ourVisionTitle}</h2>
            </div>
            <div className="about--description">
              {data.wpPage.about.ourVision}
            </div>
          </div>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default About
