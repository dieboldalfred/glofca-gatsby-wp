import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./hero.css"

const Hero = ({ title, image, content }) => {
  return (
    <section className="hero">
      <GatsbyImage
        image={getImage(image)}
        alt={title}
        className="hero-img"
        objectFit="cover"
      />
      <div className="hero-info">
        <article className="hero-article">
          <h1>{title}</h1>
          <h3>{content}</h3>
          {/* <Link to="/projects">projects</Link> */}
        </article>
      </div>
    </section>
  )
}

export default Hero
