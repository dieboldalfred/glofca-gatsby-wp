import React, { useEffect, useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

// styles
import "./navbar.css"

// components
import { Logo, SectionContent } from "../../components"

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

const Navbar = ({ toggleSidebar }) => {
  const data = useStaticQuery(graphql`
    {
      wpMenu(name: { eq: "topMenu" }) {
        menuItems {
          nodes {
            label
            path
            target
            id
          }
        }
      }
    }
  `)

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })
  const menu = data.wpMenu.menuItems.nodes
  const [navbarStyles, setNavbarStyles] = useState({
    top: "0",
    padding: "8px 0",
  })

  // display navbar on scroll up
  let prevScrollPosition = window.pageYOffset

  const displayNavBar = () => {
    var currentScrollPosition = window.pageYOffset

    const isNavBarFixed =
      document.body.scrollTop > 160 || document.documentElement.scrollTop > 160

    setNavbarStyles({
      padding: isNavBarFixed ? "0 0" : "24px 0",
      top: prevScrollPosition > currentScrollPosition ? "0" : "-128px",
    })

    prevScrollPosition = currentScrollPosition
  }

  // sub and unsub from event when component is mounted/unm from dom
  useEffect(() => {
    if (isBrowser && isDesktopOrLaptop) {
      window.addEventListener("scroll", displayNavBar)
    }

    return () => {
      window.removeEventListener("scroll", displayNavBar)
    }
  })

  return (
    <nav className="navbar" style={navbarStyles}>
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
              height={63}
              width={323}
              transformOptions={{ fit: "fill" }}
              placeholder="blurred"
            />
            <StaticImage
              src="../../assets/images/AF-Logo.jpeg"
              className="navbar--funders-logo"
              alt="logo"
              height={60}
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="navbar--right">
          <div className="navbar--links">
            <ul>
              {menu.map(item => {
                const { id, path, label } = item
                return (
                  <li key={id}>
                    <Link to={path} activeClassName="active">
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <Logo size="medium" />
        </div>
      </SectionContent>
    </nav>
  )
}
export default Navbar
