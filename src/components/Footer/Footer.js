import React from "react"

// styles
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} GLOFCA. All rights reserved.</p>
    </footer>
  )
}

export default Footer
