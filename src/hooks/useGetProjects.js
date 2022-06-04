import { useStaticQuery, graphql } from "gatsby"

export const useGetProjectsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      wpCategory(name: { eq: "projects" }) {
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
