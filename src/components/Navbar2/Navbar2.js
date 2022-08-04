import React, { useEffect, useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

// styles
import "./navbar2.css"

// components
import { Logo, SectionContent } from "../../components"

const HEIGHT_TO_SHOW = 350

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = () => typeof window !== "undefined"

const getWinScrollValue = () => {
  if (!isBrowser()) {
    return 0
  }

  return document.body.scrollTop || document.documentElement.scrollTop
}

const Navbar = ({ openSidebar }) => {
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
  const menu = data.wpMenu.menuItems.nodes

  const [navbarIsFixed, setIsNavbarFixed] = useState(
    getWinScrollValue() > HEIGHT_TO_SHOW
  )

  const listenToScroll = () => {
    const winScroll = getWinScrollValue()

    if (winScroll > HEIGHT_TO_SHOW) {
      // to limit setting state only the first time
      if (!navbarIsFixed) {
        document.getElementById("navbar2").classList.add("navbar2--fixed")
      }

      setIsNavbarFixed(true)
    } else {
      document.getElementById("navbar2").classList.remove("navbar2--fixed")
      setIsNavbarFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [])

  // const winScroll =
  //   document.body.scrollTop || document.documentElement.scrollTop

  return (
    <nav id="navbar2" className="navbar2">
      <SectionContent customClass="navbar--content2">
        <div className="navbar--left">
          <div className="navbar--menu" onClick={openSidebar}>
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
          <Logo size={navbarIsFixed ? "small" : "medium"} />
        </div>
      </SectionContent>
    </nav>
  )
}

export default Navbar
