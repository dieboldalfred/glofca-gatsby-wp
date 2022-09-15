import React from "react"
import { Section, SectionContent, ThreeColumnGrid } from "../index"

// styles
import "./cta-area-three-col.css"

const CTAAreaThreeCol = ({ leftColumn, middleColumn, rightColumn }) => {
  return (
    <Section customClass="cta-three-col">
      <SectionContent customClass="cta-three-col--container">
        <ThreeColumnGrid>
          <div>{leftColumn}</div>
          <div>{middleColumn}</div>
          <div>{rightColumn}</div>
        </ThreeColumnGrid>
      </SectionContent>
    </Section>
  )
}

export default CTAAreaThreeCol
