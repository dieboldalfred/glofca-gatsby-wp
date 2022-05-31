import React from "react"

// comps
import { Section } from "../../components"

// styles
import "./video.css"

const Video = ({ title, videoURL }) => {
  return (
    <Section title={title} customClass="video">
      <div className="video--media">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v1CInj-kUf0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Section>
  )
}

export default Video
