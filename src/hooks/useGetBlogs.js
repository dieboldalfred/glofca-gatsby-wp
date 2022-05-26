import { useStaticQuery, graphql } from "gatsby"

export const useGetBlogsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetBlogsQuery {
      glofcaJson {
        blogs {
          id
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          content
        }
      }
    }
  `)
  return data?.glofcaJson.blogs
}
