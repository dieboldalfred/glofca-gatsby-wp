import { graphql } from "gatsby"

export const CardPartsFragment = graphql`
  fragment CardParts on WpPage {
    id
    title
    slug
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, height: 500, width: 500)
          }
        }
      }
    }
  }
`
