import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components
import { Section, SectionContent } from "../index"

const Sponsors = ({ data }) => {
  return (
    <Section title="Organisers & Sponsors">
      <SectionContent customClass="tashkent__sponsors">
        {data.map((sponsor, i) => {
          return (
            <div key={i}>
              <GatsbyImage
                image={getImage(sponsor)}
                alt="sponsor"
                className="tashkent__sponsor"
              />
            </div>
          )
        })}
      </SectionContent>
    </Section>
  )
}

export default Sponsors
