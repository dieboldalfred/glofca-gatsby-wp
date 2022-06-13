import React from "react"

import "./blurb.css"

const Blurb = ({
  heading,
  subHeading,
  minorHeading,
  buttonOneText,
  buttonOneLink,
  buttonTwoText,
  buttonTwoLink,
}) => {
  return (
    <div className="blurb">
      {heading && <h2 className="blurb--heading">{heading}</h2>}
      {subHeading && <h3 className="blurb--sub-heading">{subHeading}</h3>}
      {minorHeading && <h5 className="blurb--minor-heading">{minorHeading}</h5>}
      <div className="underline"></div>
      {buttonOneText && buttonOneLink && (
        <a target="_blank" className="btn btn-left" href={buttonOneLink}>
          {buttonOneText}
        </a>
      )}
      {buttonTwoText && buttonTwoLink && (
        <a target="_blank" className="btn btn-left" href={buttonTwoLink}>
          {buttonTwoText}
        </a>
      )}
    </div>
  )
}

export default Blurb
