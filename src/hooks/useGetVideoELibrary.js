import { useStaticQuery, graphql } from "gatsby"

export const useGetVideoELibraryQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allVideoeLibrarySheetsData {
        nodes {
          title
          region
          link
          length
          keywords
          date
          abstract
          topics
          id
          contributor
          producer
          publisher
        }
      }
    }
  `)

  return data.allVideoeLibrarySheetsData.nodes
}
