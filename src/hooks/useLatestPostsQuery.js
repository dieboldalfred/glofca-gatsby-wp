import { useStaticQuery, graphql } from "gatsby"

export const useLatestPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetLatestNews {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "news" } } } }
        }
        limit: 6
      ) {
        nodes {
          id
          title
          slug
          excerpt
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
  return data.allWpPost.nodes
}
