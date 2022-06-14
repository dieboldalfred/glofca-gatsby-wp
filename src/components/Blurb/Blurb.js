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
  buttons,
}) => {
  return (
    <div className="blurb">
      {heading && <h2 className="blurb--heading">{heading}</h2>}
      {subHeading && <h3 className="blurb--sub-heading">{subHeading}</h3>}
      {minorHeading && <h5 className="blurb--minor-heading">{minorHeading}</h5>}
      {/* <div className="underline"></div> */}
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
      {buttons &&
        buttons.map(btn => {
          ;<a target="_blank" className="btn btn-left" href={btn.link}>
            {btn.label}
          </a>
        })}
    </div>
  )
}
// buttons = [{ text: '', link: ''}] buttons.map(x => ())

export default Blurb
