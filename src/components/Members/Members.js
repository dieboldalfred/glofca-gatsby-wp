import React from "react"

// comps
import { Section, SectionContent } from "../../components"
import Member from "./Member/Member"

import "./members.css"

const Members = ({ title, data, customClass, link }) => (
  <Section customClass="members" title={title}>
    <SectionContent customClass="members__center">
      {data.map(member => {
        return link ? (
          <a href={member.teamMemberFields.link.url} target="_blank">
            <Member key={member.id} member={member} customClass={customClass} />
          </a>
        ) : (
          <Member key={member.id} member={member} customClass={customClass} />
        )
      })}
    </SectionContent>
  </Section>
)

export default Members
