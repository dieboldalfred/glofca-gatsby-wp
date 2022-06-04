import { useStaticQuery, graphql } from "gatsby"

export const useLatestPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetLatestNews {
      allWpCategory(filter: { name: { eq: "news" } }, limit: 6) {
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
