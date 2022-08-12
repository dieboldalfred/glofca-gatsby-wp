import React from "react"
import { graphql } from "gatsby"

// comps
import { Section, SectionContent, Seo } from "../components"
import Layout from "../components/Layout"

const Imprint = data => {
  const page = data.data.wpPage
  return (
    <Layout>
      <Seo title="Imprint" />
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
    wpPage(databaseId: { eq: 267 }) {
      id
      content
      title
    }
  }
`

export default Imprint
