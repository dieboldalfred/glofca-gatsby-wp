import { useStaticQuery, graphql } from "gatsby"

export const useGetDatabasesQuery = () => {
  const data = useStaticQuery(graphql`
    query GetDatabases {
      allWpPage(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "databases" } } } }
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
