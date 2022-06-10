import React from "react"
import classNames from "classnames"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./hero.css"

const Hero = ({
  title,
  image,
  content,
  width = "670px",
  align = "left",
  height = "large",
}) => {
  const articleClasses = classNames("hero--article", {
    [`hero--article-align-${align}`]: true,
  })

  return (
    <section className={`hero hero-size-${height}`}>
      <GatsbyImage
        image={getImage(image)}
        alt={title}
        className="hero--image"
        objectFit="cover"
      />
      <div className="hero--info">
        <article
          style={width ? { width } : undefined}
          className={articleClasses}
        >
          <h1>{title}</h1>
          <h3>{content}</h3>
        </article>
      </div>
    </section>
  )
}

export default Hero
