import { useStaticQuery, graphql } from "gatsby"

export const useGetProjectsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetProjectsQuery {
      glofcaJson {
        projects {
          id
          title
        }
      }
    }
  `)
  return data?.glofcaJson.projects
}
