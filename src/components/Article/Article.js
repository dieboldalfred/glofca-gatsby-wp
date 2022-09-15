import React from "react"

// components
import { Section, SectionContent } from "../index"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Article = ({ title, image, content }) => (
  <Section title={title}>
    <SectionContent>
      {image && (
        <div className="blog-featured-image">
          <GatsbyImage image={getImage(image?.node.localFile)} alt={title} />
        </div>
      )}
      <div
        className="blog--content reduced-width"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </SectionContent>
  </Section>
)
export default Article
