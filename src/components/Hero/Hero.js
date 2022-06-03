import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./hero.css"

const Hero = ({
  title,
  image,
  content,
  align = "center",
  height = "large",
}) => {
  console.log(image)
  return (
    <section className={`hero hero-size-${height}`}>
      <GatsbyImage
        image={getImage(image?.localFile)}
        alt={title}
        className="hero--image"
        objectFit="cover"
      />
      <div className="hero--info">
        <article className={`hero--article hero--article-align-${align}`}>
          <h1>{title}</h1>
          <h3>{content}</h3>
        </article>
      </div>
    </section>
  )
}

export default Hero
