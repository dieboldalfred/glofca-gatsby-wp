import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// styles
import "./blog.css"

const Blog = ({ title, imageName, content }) => {
  const res = useStaticQuery(
    graphql`
      query ImageQuery($imageName: String!) {
        image: file(
          relativePath: { eq: $imageName} }
        ) {
          childImageSharp {
            resize(width: 350) {
              src
            }
            gatsbyImageData(width: 300)
          }
        }
      }
    `
  )

  const src = res.image.childImageSharp.resize.src

  return (
    <article className="blog">
      {/* <StaticImage src={src} className="card-image" alt="logo" /> */}
      <div className="blog-info">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </article>
  )
}

export default Blog
