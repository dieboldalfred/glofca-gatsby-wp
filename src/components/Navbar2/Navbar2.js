import React from "react"
import { GoThreeBars } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

// styles
import "./navbar2.css"

// components
import { Logo, SectionContent } from "../../components"

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
          <Logo size="medium" />
        </div>
      </SectionContent>
    </nav>
  )
}

// export const query = graphql`
//   {
//     menu: wpMenu(name: { eq: "topMenu" }) {
//       menuItems {
//         nodes {
//           label
//           path
//           target
//           id
//         }
//       }
//     }
//   }
// `

export default Navbar
