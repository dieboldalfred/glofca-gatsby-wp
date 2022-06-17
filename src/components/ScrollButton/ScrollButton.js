import React, { useState } from "react"
import { FaArrowCircleUp } from "react-icons/fa"

import "./scroll-button.css"

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    })
  }

  if (isBrowser) {
    window.addEventListener("scroll", toggleVisible)
  }

  return (
    <div className="scroll-button">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  )
}

export default ScrollButton
