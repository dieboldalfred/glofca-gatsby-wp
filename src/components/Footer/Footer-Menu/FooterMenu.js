import React from "react"
import { Link } from "gatsby"

//styles
import "./footer-menu.css"

const FooterMenu = ({ menuName, list }) => {
  return (
    <>
      <h4>{menuName}</h4>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`${menuName}/${item}`}>{item}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default FooterMenu
