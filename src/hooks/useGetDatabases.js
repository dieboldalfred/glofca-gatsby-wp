import { useStaticQuery, graphql } from "gatsby"

export const useGetDatabasesQuery = () => {
  const data = useStaticQuery(graphql`
    query GetDatabases {
      wpCategory(name: { eq: "databases" }) {
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
