import React, { useContext } from "react"
import { Link } from "gatsby"
import NavLink from "./NavLink/NavLink"
import { GoThreeBars } from "react-icons/go"
import { GatsbyContext } from "../../context/context"
import { StaticImage } from "gatsby-plugin-image"

// styles
import "./navbar.css"

const Navbar = () => {
  const { isSidebarOpen, openSidebar, links } = useContext(GatsbyContext)

  const tempLinks = [
    ...new Set(
      links.map(link => {
        return link.page
      })
    ),
  ]

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              src="../../assets/images/logo.png"
              className="logo"
              alt="logo"
            />
          </Link>
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={openSidebar}>
              <GoThreeBars />
            </button>
          )}
        </div>
        <ul className="nav-links">
          {tempLinks.map((page, index) => {
            return <NavLink key={index} page={page} />
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
