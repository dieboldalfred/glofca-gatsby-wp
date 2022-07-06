import { graphql } from "gatsby"

export const partnerFields = graphql`
  fragment partnerFields on Partners {
    nodes {
      title
      slug
      id
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 200, height: 200)
            }
          }
        }
      }
    }
  }
`

export const authorFields = graphql`
  fragment authorFields on AuthorsJson {
    slug
    name
    biography
  }
`
