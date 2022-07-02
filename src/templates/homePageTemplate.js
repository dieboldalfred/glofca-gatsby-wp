import React from "react"
import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"
const HomepageTemplate = () => {
  return (
    <React.Fragment>
      <p>Description</p>
      <Link to="/eng">English</Link>
      <Link to="/ru">Russian</Link>
    </React.Fragment>
  )
}

// export const query = graphql`
//   {
//     wpPage(slug: { eq: "homepage" }) {
//       homepageData {
//         title
//         description
//       }
//     }
//   }
// `

export default HomepageTemplate
