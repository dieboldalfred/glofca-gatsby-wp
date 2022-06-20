import { useStaticQuery, graphql } from "gatsby"

export const useGetAllPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetAllNews {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "news" } } } }
        }
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
