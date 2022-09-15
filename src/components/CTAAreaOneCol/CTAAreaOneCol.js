import React from "react"

import { Section, SectionContent } from "../index"

// styles
import "./cta-area-one-col.css"

const CTAAreaOneCol = ({ title, content }) => {
  return (
    <Section title={title}>
      <SectionContent>{content}</SectionContent>
    </Section>
  )
}

export default CTAAreaOneCol
