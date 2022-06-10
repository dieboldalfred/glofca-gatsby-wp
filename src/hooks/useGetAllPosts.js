import { useStaticQuery, graphql } from "gatsby"

export const useGetAllPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetAllNews {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "news" } } } }
        }
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
