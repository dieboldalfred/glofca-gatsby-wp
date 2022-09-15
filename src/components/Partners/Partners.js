import React from "react"
import { Link } from "gatsby"

// comps
import { Section, SectionContent } from "../../components"
import Partner from "./Partner/Partner"

import "./partners.css"

const Partners = ({ title, data, customClass }) => (
  <Section customClass={customClass} title={title}>
    <SectionContent customClass="partners-center">
      {data.map(partner => (
        <Link to={`/partners/${partner.slug}`} className="team-center--item">
          <Partner
            key={partner.id}
            image={partner.featuredImage}
            title={partner.title}
          />
        </Link>
      ))}
    </SectionContent>
  </Section>
)
export default Partners
