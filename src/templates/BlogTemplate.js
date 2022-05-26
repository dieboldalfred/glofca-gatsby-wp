import React from "react"
import { Title } from "../components"
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
      <section className="section">
        <Title title={title} />
        <GatsbyImage image={getImage(image)} alt={title} />
        <div className="section-center blog-center">
          <p>{content}</p>
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
