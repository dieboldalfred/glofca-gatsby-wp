import React from "react"

import "./videoplayer.css"

const VideoPlayer = ({ videoURL }) => {
  return (
    <div className="videoplayer">
      <iframe
        width="560"
        height="315"
        className="embed-responsive-item"
        src={videoURL}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
export default VideoPlayer

{
  /* <iframe width="1152" height="649" src="https://www.youtube.com/embed/fEVjZN8quro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
