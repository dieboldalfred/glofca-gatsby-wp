import React from "react"
import { Link } from "gatsby"

//styles
import "./footer-menu.css"

const FooterMenu = ({ menuName, list }) => {
  console.log(list)
  return (
    <>
      <h4>{menuName}</h4>
      <ul className="footer--col-menu">
        {list.menuItems.nodes.map((item, index) => {
          const { label, id, path } = item
          return (
            <li key={id}>
              <Link to={path}>{label}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default FooterMenu
