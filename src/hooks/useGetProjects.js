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
