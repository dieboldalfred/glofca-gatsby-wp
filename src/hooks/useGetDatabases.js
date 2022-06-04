import { useStaticQuery, graphql } from "gatsby"

export const useGetDatabasesQuery = () => {
  const data = useStaticQuery(graphql`
    query GetDatabases {
      allWpPage(filter: { slug: { eq: "databases" } }) {
        nodes {
          wpChildren {
            nodes {
              ... on WpPage {
                id
                title
                slug
                featuredImage {
                  node {
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
        }
      }
    }
  `)
  return data?.allWpPage.nodes[0].wpChildren.nodes
}
