import { useStaticQuery, graphql } from "gatsby"

export const useLatestPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetLatestNews {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "news" } } } }
        }
        limit: 3
        sort: { order: DESC, fields: date }
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
                  gatsbyImageData(
                    placeholder: TRACED_SVG
                    width: 600
                    height: 600
                  )
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
