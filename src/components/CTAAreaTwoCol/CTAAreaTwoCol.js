import React from "react"
import { Section, SectionContent, TwoColumnGrid, GridColumn } from "../index"

// styles
import "./cta-area-two-col.css"

const CTAAreaTwoCol = ({ leftColumn, rightColumn, format }) => {
  return (
    <Section customClass="cta-two-col">
      <SectionContent customClass="cta-two-col--container">
        <TwoColumnGrid format={format}>
          <GridColumn>{leftColumn}</GridColumn>
          <GridColumn>{rightColumn}</GridColumn>
        </TwoColumnGrid>
      </SectionContent>
    </Section>
  )
}

export default CTAAreaTwoCol
