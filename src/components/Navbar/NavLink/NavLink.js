import React, { useContext } from "react"
import { Link } from "gatsby"
import { GatsbyContext } from "../../../context/context"

// styles
import "./navlink.css"

const NavLink = ({ page }) => {
  const { links } = useContext(GatsbyContext)

  return (
    <li className="navlink">
      <button className="navlink-button">{page}</button>
      <div className="navlink-links">
        {links.map((link, index) => {
          const { url, label, icon } = link
          if (link.page === page) {
            return (
              <Link to={url} key={index}>
                {/* {icon} */}
                {label}
              </Link>
            )
          }
        })}
        <div className="caret"></div>
      </div>
    </li>
  )
}

export default NavLink
