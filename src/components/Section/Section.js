import React from "react"
import classNames from "classnames"

// styles
import "./section.css"
import Title from "../Title/Title"

const Section = ({ title, children, customClass }) => {
  const classes = classNames("section", {
    [customClass]: Boolean(customClass),
  })

  //section--content -> 980px
  return (
    <section className={classes}>
      {title && <Title title={title} />}
      {children}
    </section>
  )
}

export default Section
