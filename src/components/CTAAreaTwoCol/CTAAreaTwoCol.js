import React from "react"
import { Section, SectionContent, TwoColumnGrid } from "../index"

// styles
import "./cta-area-two-col.css"

const CTAAreaTwoCol = ({ leftColumn, rightColumn, format = "uneven" }) => {
  return (
    <Section customClass="cta-two-col">
      <SectionContent customClass="cta-two-col--container">
        <TwoColumnGrid format={format}>
          <div>{leftColumn}</div>
          <div>{rightColumn}</div>
        </TwoColumnGrid>
      </SectionContent>
    </Section>
  )
}

export default CTAAreaTwoCol
