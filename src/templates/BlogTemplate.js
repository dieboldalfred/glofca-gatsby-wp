import React from "react"
import { Section, SectionContent } from "../components"
import Layout from "../components/Layout"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogTemplate = ({ pageContext: { blog } }) => {
  const { title, image, content } = blog

  /**
   * className inside Component = "block" /// blog-template
   *
   * root -> className = "block"
   * Modi
   *
   * everything inside => element
   * block--elem   => blog-template--title
   */
  return (
    <Layout>
      <Section title={title}>
        <SectionContent>
          <GatsbyImage image={getImage(image)} alt={title} />
        </SectionContent>
        <SectionContent customClass="blog-center">
          <div className="blog--content">{content}</div>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default BlogTemplate
