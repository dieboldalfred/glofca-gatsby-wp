import React from "react"
import Title from "../Title/Title"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import projects from "../../constants/projects.js"

// styles
import "./projects.css"

const Projects = ({ title }) => {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
        {projects.map(project => {
          console.log(project)
          const { id, title, image } = project
          return (
            <article className="project-article" key={id}>
              {/* <img src={image} alt={title} /> */}
              {/* <StaticImage
                src="../../assets/images/tajikistan.jpg"
                className="project-img"
                alt={title}
              /> */}
              <div className="project-container">
                <div className="project-info">
                  <h3>{title}</h3>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
