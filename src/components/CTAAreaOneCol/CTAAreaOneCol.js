import React from "react"

import { Section, SectionContent } from "../index"

// styles
import "./cta-area-one-col.css"

const CTAAreaOneCol = ({ title, content }) => {
  return (
    <Section title={title} customClass="cta-one-col">
      <SectionContent customClass="cta-one-col--container">
        {content}
      </SectionContent>
    </Section>
  )
}

export default CTAAreaOneCol
