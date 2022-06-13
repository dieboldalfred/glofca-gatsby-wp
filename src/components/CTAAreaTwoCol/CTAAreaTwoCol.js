import React from "react"
import { Section, SectionContent, TwoColumnGrid, GridColumn } from "../index"

// styles
import "./cta-area-two-col.css"

const CTAAreaTwoCol = ({ leftColumn, rightColumn }) => {
  return (
    <Section customClass="cta-two-col">
      <SectionContent customClass="cta-two-col--container">
        <TwoColumnGrid>
          <GridColumn>{leftColumn}</GridColumn>
          <GridColumn>{rightColumn}</GridColumn>
        </TwoColumnGrid>
      </SectionContent>
    </Section>
  )
}

export default CTAAreaTwoCol
