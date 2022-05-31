import React from "react"
import Layout from "../components/Layout"
import { Section, SectionContent } from "../components"

const About = () => {
  return (
    <Layout>
      <Section title="About">
        <SectionContent customClass="about">
          <div className="about--container">
            <div className="about--header">
              <h2>About</h2>
            </div>
            <div className="about--description">
              Global temperatures are rising, and glaciers are melting
              worldwide. As the climate changes and glaciers melt, the risk of
              so-called glacier lake outburst floods (GLOFs) is increasing. Back
              in 2007, the United Nations Environment Programme classified GLOFs
              as “the largest and most extensive glacial hazard […] with the
              highest potential for disaster and damage.” But even before that,
              Central Asia has experienced its disastrous effect. In 1998, more
              than a hundred people died during an outburst flood in
              Shakhimardan Valley of Uzbekistan. In 2002, a similar flood in
              Tajikistan claimed dozens of people’s lives. This tragic history
              of glaciers melting related hazards and glacier lake outburst
              floods in the region is not exhaustive. There were other incidents
              later in 2008 and 2015 in Kyrgyzstan and Kazakhstan, which led to
              substantial damage to infrastructure and economic losses. And this
              threat has not disappeared, but exacerbated over last years:
              people in mountainous areas face threats of outburst floods, with
              many others at risk downstream, with the most vulnerable remaining
              most affected.
            </div>
          </div>
          <div className="about--container">
            <div className="about--header">
              <h2>Our Vision</h2>
            </div>
            <div className="about--description">
              To provide reliable and credible information and knowledge Glacier
              Lake Outburst Flood (GLOFs), Disaster Risk Reduction (DRR) and
              Early Warning Systems (EWS) in Central Asia to all stakeholders
              and the interested public. There is a lot of data and knowledge
              available in Central Asia. Much of it is not easily available to
              all stakeholders and the general public. We like to contribute
              towards better networking and information exchange of stakeholders
              as well as to foster the discussion about GLOFs, DRR and EWS.
            </div>
          </div>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default About
