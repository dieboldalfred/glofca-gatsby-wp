import React from "react"
import { GoThreeBars } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"

// styles
import "./navbar.css"

// components
import { Logo, SectionContent } from "../../components"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <SectionContent customClass="nav-center">
        <div className="nav-header">
          <div className="toggle-button" onClick={toggleSidebar}>
            <GoThreeBars />
          </div>
          {/* <div className="nav-extra-logos">
            <StaticImage
              src="../../assets/images/unesco-large.png"
              className="logo"
              alt="logo"
            />
            <StaticImage
              src="../../assets/images/AF-Logo.jpeg"
              className="logo"
              alt="logo"
            />
          </div> */}
        </div>
        <Logo />
      </SectionContent>
    </nav>
  )
}
export default Navbar
