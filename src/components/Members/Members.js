import React from "react"

// comps
import { Section, SectionContent } from "../../components"
import Member from "./Member/Member"

import "./members.css"

const Members = ({ title, data, customClass }) => (
  <Section customClass="members" title={title}>
    <SectionContent customClass="members__center">
      {data.map(member => (
        <Member
          key={member.id}
          image={member.featuredImage}
          title={member.title}
          position={member.teamMemberFields.position}
          company={member.teamMemberFields.company}
          customClass={customClass}
        />
      ))}
    </SectionContent>
  </Section>
)
export default Members
