import { useStaticQuery, graphql } from "gatsby"

export const useGetThemesQuery = () => {
  const data = useStaticQuery(graphql`
    query GetThemes {
      allWpPage(filter: { slug: { eq: "themes" } }) {
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
