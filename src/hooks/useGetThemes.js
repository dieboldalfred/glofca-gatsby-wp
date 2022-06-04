import { useStaticQuery, graphql } from "gatsby"

export const useGetThemesQuery = () => {
  const data = useStaticQuery(graphql`
    query GetThemes {
      wpCategory(name: { eq: "themes" }) {
        pages {
          nodes {
            id
            slug
            title
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data?.wpCategory.pages.nodes
}
