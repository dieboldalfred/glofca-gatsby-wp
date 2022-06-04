import { useStaticQuery, graphql } from "gatsby"

export const useGetAllPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetAllNews {
      allWpCategory(filter: { name: { eq: "news" } }) {
        nodes {
          posts {
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
      }
    }
  `)
  return data.allWpCategory.nodes[0].posts.nodes
}
