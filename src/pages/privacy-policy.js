import React from "react"
import { graphql } from "gatsby"
// comps
import { Section, SectionContent } from "../components"
import Layout from "../components/Layout"

const PrivacyPolicy = data => {
  const page = data.data.wpPage
  return (
    <Layout>
      <Section title={page.title}>
        <SectionContent>
          <div
            className="blog--content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </SectionContent>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(databaseId: { eq: 270 }) {
      id
      content
      title
    }
  }
`

export default PrivacyPolicy
