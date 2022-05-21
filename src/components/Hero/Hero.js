import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// styles
import "./hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <StaticImage
        src="../../assets/images/mainBCG.jpg"
        layout="fullWidth"
        className="hero-img"
        alt="main"
      />
      <div className="hero-info">
        <article hero-article>
          <h3>if you van dream it, we can do it</h3>
          <h1>Let Your home be unique and stylish</h1>
          {/* <Link to="/projects">projects</Link> */}
        </article>
      </div>
    </section>
  )
}

export default Hero
