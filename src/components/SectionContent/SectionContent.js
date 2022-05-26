import React from "react"
import classNames from "classnames"

// styles
import "./section-content.css"

const SectionContent = ({ children, customClass }) => {
  const classes = classNames("section-content", {
    [customClass]: Boolean(customClass),
  })

  //section--content -> 980px
  return <section className={classes}>{children}</section>
}

export default SectionContent
