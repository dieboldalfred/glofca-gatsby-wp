import React from "react"
import { Section, SectionContent, TwoColumnGrid, GridColumn } from "../index"

// styles
import "./cta-area.css"

const CTAArea = ({ leftColumn, rightColumn }) => {
  return (
    <Section customClass="cta">
      <SectionContent customClass="cta--container">
        <TwoColumnGrid>
          <GridColumn>{leftColumn}</GridColumn>
          <GridColumn>{rightColumn}</GridColumn>
        </TwoColumnGrid>
      </SectionContent>
    </Section>
  )
}

export default CTAArea
