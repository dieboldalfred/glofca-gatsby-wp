import { useStaticQuery, graphql } from "gatsby"

export const useLatestPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetLatestPostsQuery {
      allWpPost(limit: 3) {
        nodes {
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
            }
          }
          content
          excerpt
          id
          slug
        }
      }
    }
  `)
  return data?.allWpPost.nodes
}
