import React, { useEffect, useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

// styles
import "./navbar.css"

// components
import { Logo, SectionContent } from "../../components"

// utils
import { DESKTOP_BREAKPOINT } from "../../utils/breakpoints"

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = () => typeof window !== "undefined"

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

  // useDesktopQuery =
  const isDesktopOrLaptop = useMediaQuery(DESKTOP_BREAKPOINT)
  const menu = data.wpMenu.menuItems.nodes
  const [navbarStyles, setNavbarStyles] = useState({
    top: "0",
    padding: "24px 0",
  })

  const [logoSize, setLogoSize] = useState(
    isDesktopOrLaptop ? "medium" : "small"
  )

  // display navbar on scroll up

  let prevScrollPosition = isBrowser() ? window.pageYOffset : 0

  const displayNavBar = () => {
    // get the current scroll position
    var currentScrollPosition = window.pageYOffset

    // is position > 160? yes, isNavbarSticy = true
    const isNavBarSticky =
      document.body.scrollTop > 160 || document.documentElement.scrollTop > 160

    // update navbar styles based on boolean value
    setNavbarStyles({
      padding: isNavBarSticky ? "8px 0" : "24px 0",
      top:
        prevScrollPosition < currentScrollPosition && isNavBarSticky
          ? "-128px"
          : "0",
    })

    // change logo size based on boolean value
    setLogoSize(isNavBarSticky ? "small" : "medium")

    // reset scroll position for next call
    prevScrollPosition = currentScrollPosition
  }

  console.log(isBrowser)
  // sub and unsub from event when component is mounted/unm from dom
  useEffect(() => {
    if (isBrowser() && isDesktopOrLaptop) {
      window.addEventListener("scroll", displayNavBar)
    }

    return () => {
      window.removeEventListener("scroll", displayNavBar)
    }
  }, [isBrowser()])

  return (
    <nav className="navbar" style={isDesktopOrLaptop ? navbarStyles : {}}>
      <SectionContent customClass="navbar--content">
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
          <Logo size={logoSize} />
        </div>
      </SectionContent>
    </nav>
  )
}
export default Navbar
