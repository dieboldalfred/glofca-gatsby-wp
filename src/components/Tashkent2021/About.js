import React from "react"

// components
import { Section, SectionContent } from "../index"

const About = ({ data }) => (
  <Section title="About" customClass="tashkent-section__image">
    <SectionContent customClass="tashkent-about">
      {data.map((text, i) => {
        return (
          <div key={i} className="tashkent-about--text-box">
            <h5 className="text__coloured">{text.title}</h5>
            <p>{text.text}</p>
          </div>
        )
      })}
    </SectionContent>
  </Section>
)
export default About
