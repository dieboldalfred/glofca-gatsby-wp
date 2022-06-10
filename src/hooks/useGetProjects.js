import { useStaticQuery, graphql } from "gatsby"

export const useGetProjectsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allWpPage(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "projects" } } } }
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
                  gatsbyImageData(placeholder: TRACED_SVG)
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
