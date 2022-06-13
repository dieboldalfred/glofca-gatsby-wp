import React from "react"

import "./title.css"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2 className="section-title--text">{title}</h2>
      <div className="underline underline-center"></div>
    </div>
  )
}

export default Title
