import React from "react"
import { Link } from "gatsby"

//styles
import "./footer-menu.css"

const FooterMenu = ({ menuName, list }) => {
  return (
    <>
      <h3 className="footer--col-title">{menuName}</h3>
      <ul className="footer--col-menu">
        {list.menuItems.nodes.map(menuItem => (
          <li key={menuItem.id}>
            <Link to={menuItem.path}>{menuItem.label}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default FooterMenu
