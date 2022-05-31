import React from "react"
import { GoThreeBars } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// styles
import "./navbar.css"

// components
import { Logo, SectionContent } from "../../components"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <SectionContent customClass="navbar--content">
        <div className="navbar--left">
          <div className="navbar--menu" onClick={toggleSidebar}>
            <GoThreeBars />
          </div>
          <div className="navbar--funders">
            <StaticImage
              src="../../assets/images/unesco-large.png"
              className="navbar--funders-logo"
              alt="logo"
              height="63"
              width="323"
              transformOptions={{ fit: "fill" }}
            />
            <StaticImage
              src="../../assets/images/AF-Logo.jpeg"
              className="navbar--funders-logo"
              alt="logo"
              height="60"
            />
          </div>
        </div>
        <div className="navbar--right">
          <div className="navbar--links">
            <ul>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Logo />
        </div>
      </SectionContent>
    </nav>
  )
}
export default Navbar
