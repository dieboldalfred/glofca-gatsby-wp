import React from "react"
import classNames from "classnames"

import "./videoplayer.css"

const VideoPlayer = ({ url, customClass }) => {
  const classes = classNames("videoplayer", {
    [customClass]: Boolean(customClass),
  })
  return (
    <div className={classes}>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
export default VideoPlayer
