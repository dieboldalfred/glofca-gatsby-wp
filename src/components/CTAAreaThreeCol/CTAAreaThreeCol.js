import React from "react"
import { Section, SectionContent, ThreeColumnGrid, GridColumn } from "../index"

// styles
import "./cta-area-three-col.css"

const CTAAreaTwoCol = ({ leftColumn, middleColumn, rightColumn }) => {
  return (
    <Section customClass="cta-three-col">
      <SectionContent customClass="cta-three-col--container">
        <ThreeColumnGrid>
          <GridColumn>{leftColumn}</GridColumn>
          <GridColumn>{middleColumn}</GridColumn>
          <GridColumn>{rightColumn}</GridColumn>
        </ThreeColumnGrid>
      </SectionContent>
    </Section>
  )
}

export default CTAAreaTwoCol
