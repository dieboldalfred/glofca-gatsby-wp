import { useStaticQuery, graphql } from "gatsby"

export const useGetThemesQuery = () => {
  const data = useStaticQuery(graphql`
    query GetThemes {
      allWpPage(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "themes" } } } }
        }
      ) {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG
                    height: 500
                    width: 500
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  return data?.allWpPage.nodes
}
