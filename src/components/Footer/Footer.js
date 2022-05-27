import React from "react"
import { Link } from "gatsby"

// styles
import "./footer.css"

// comps
import { Logo, SectionContent } from "../index"
import FooterMenu from "./Footer-Menu/FooterMenu"

const links = ["item1", "item2", "item3"]

const Footer = () => {
  return (
    <footer className="footer">
      <SectionContent customClass="footer--menu">
        <div className="footer--col">
          <Logo
            text="Glacier Lake Outburst Floods in Central Asia"
            customClass="footer--logo"
          />
        </div>
        <div className="footer--col">
          <FooterMenu menuName="Knowledge" list={links} />
        </div>
        <div className="footer--col">
          <FooterMenu menuName="Project" list={links} />
        </div>
        <div className="footer--col">
          <FooterMenu menuName="Themes" list={links} />
        </div>
      </SectionContent>
      <SectionContent customClass="footer--logo-container">
        <div className="footer--col">UNESCO</div>
        <div className="footer--col">AF</div>
      </SectionContent>
      <SectionContent customClass="footer--links">
        <ul>
          <li>
            <Link>Item</Link>
          </li>
          <li>
            <Link>Item</Link>
          </li>
          <li>
            <Link>Item</Link>
          </li>
        </ul>
      </SectionContent>
      {/* <p>&copy; {new Date().getFullYear()} GLOFCA. All rights reserved.</p> */}
    </footer>
  )
}

export default Footer
