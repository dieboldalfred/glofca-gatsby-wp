import React from "react"
import { graphql, PageProps } from "gatsby"
// comps
import { Section, SectionContent, Seo } from "../components"
import Layout from "../components/Layout"

type GraphQlResult = {
  wpPage: {
    id: string
    content: string
    title: string
  }
}

const PrivacyPolicy: React.FC<PageProps<GraphQlResult>> = data => {
  const page = data.data.wpPage
  return (
    <Layout>
      <Seo title={page.title} />
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
