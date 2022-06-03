import React from "react"

// comps
import { Section, SectionContent, Title } from "../../components"

// styles
import "./video.css"

const Video = ({ title, videoURL }) => {
  return (
    <Section customClass="video">
      <SectionContent customClass="video--container">
        <Title title={title} />
        <div className="video--media">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/v1CInj-kUf0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </SectionContent>
    </Section>
  )
}

export default Video
