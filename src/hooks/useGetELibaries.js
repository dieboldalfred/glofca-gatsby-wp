import { useStaticQuery, graphql } from "gatsby"

export const useGetELibrariesQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allWpELibrary {
        nodes {
          title
          keywords {
            nodes {
              name
            }
          }
          topics {
            nodes {
              name
            }
          }
          elibraryFields {
            abstract
            author
            contributor
            format
            link
            publishedIn
            publisher
            region
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allWpELibrary.nodes
}
