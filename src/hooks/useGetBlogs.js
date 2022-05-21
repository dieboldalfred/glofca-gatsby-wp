import { useStaticQuery, graphql } from "gatsby"

export const useGetBlogsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetBlogsQuery {
      glofcaJson {
        blogs {
          id
          title
          image {
            publicURL
          }
          content
        }
      }
    }
  `)
  return data?.glofcaJson.blogs
}
