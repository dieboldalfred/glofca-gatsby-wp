import React from "react"
import { Section, SectionContent, Grid, GridColumn } from "../index"

// styles
import "./cta-area.css"

const CTAArea = ({ leftColumn, rightColumn }) => {
  return (
    <Section customClass="cta">
      <SectionContent customClass="cta--container">
        <Grid>
          <GridColumn>{leftColumn}</GridColumn>
          <GridColumn>{rightColumn}</GridColumn>
        </Grid>
      </SectionContent>
    </Section>
  )
}

export default CTAArea
