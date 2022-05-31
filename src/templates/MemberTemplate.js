import React from "react"
import Layout from "../components/Layout"
import { Section, SectionContent } from "../components"

const MemberTemplate = ({ pageContext: { member } }) => {
  return (
    <Layout>
      <Section title={member.name}>
        <SectionContent>content</SectionContent>
      </Section>
    </Layout>
  )
}

export default MemberTemplate
