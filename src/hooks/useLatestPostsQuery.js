import { useStaticQuery, graphql } from "gatsby"

export const useLatestPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetLatestPostsQuery {
      allWpPost(limit: 3) {
        nodes {
          uri
          title
          featuredImage {
            node {
              publicUrl
            }
          }
          content
          id
          slug
        }
      }
    }
  `)
  return data?.allWpPost.nodes
}
