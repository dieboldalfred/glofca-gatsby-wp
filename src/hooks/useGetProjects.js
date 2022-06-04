import { useStaticQuery, graphql } from "gatsby"

export const useGetProjectsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allWpPage(filter: { slug: { eq: "projects" } }) {
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
