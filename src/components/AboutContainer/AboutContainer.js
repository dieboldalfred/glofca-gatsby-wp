import React from "react"

import "./about-container.css"

const AboutContainer = ({ title, text }) => {
  return (
    <div className="about--container">
      <div className="about--header">
        <h2>{title}</h2>
      </div>
      <div className="about--description">{text}</div>
    </div>
  )
}

export default AboutContainer
