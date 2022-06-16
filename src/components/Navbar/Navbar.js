import React from "react"
import { GoThreeBars } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

// styles
import "./navbar.css"

// components
import { Logo, SectionContent } from "../../components"

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

  // display navbar on scroll up
  let prevScrollPosition = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPosition = window.pageYOffset
    if (prevScrollPosition > currentScrollPosition) {
      document.getElementById("navbar").style.top = "0"
    } else {
      document.getElementById("navbar").style.top = "-128px"
    }
    prevScrollPosition = currentScrollPosition
    if (
      document.body.scrollTop > 160 ||
      document.documentElement.scrollTop > 160
    ) {
      document.getElementById("navbar").style.padding = "0 0"
      // document.getElementById("logo").style.fontSize = "25px"
    } else {
      document.getElementById("navbar").style.padding = "24px 0"
      // document.getElementById("logo").style.fontSize = "35px"
    }
  }

  return (
    <nav id="navbar" className="navbar">
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
            />
            <StaticImage
              src="../../assets/images/AF-Logo.jpeg"
              className="navbar--funders-logo"
              alt="logo"
              height={60}
            />
          </div>
        </div>
        <div className="navbar--right">
          <div className="navbar--links">
            <ul>
              {data.wpMenu.menuItems.nodes.map(item => {
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
