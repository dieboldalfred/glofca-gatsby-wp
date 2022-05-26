import React from "react"
import italy from "../../assets/images/italy.jpg"

// styles
import "./banner2.css"

const Banner2 = ({ title, blurb, image }) => (
  <section className="banner2">
    <h1 className="banner2-h1">{title}</h1>
    {blurb && <p className="banner2-p">{blurb}</p>}
  </section>
)

export default Banner2
