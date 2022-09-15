import React from "react"

import "./blurb.css"

const Blurb = ({ heading, subHeading, minorHeading }) => {
  return (
    <div className="blurb">
      <div className="blurb--headings">
        {heading && <h2 className="blurb--heading">{heading}</h2>}
        {subHeading && <h3 className="blurb--sub-heading">{subHeading}</h3>}
        {minorHeading && (
          <h5 className="blurb--minor-heading">{minorHeading}</h5>
        )}
        <div className="underline underline--clr-white"></div>
      </div>
    </div>
  )
}

export default Blurb
