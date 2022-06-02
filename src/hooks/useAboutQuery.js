import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query useAboutQuery {
      wpPage(slug: { eq: "about" }) {
        about {
          about
          ourMission
          ourVision
          aboutTitle
          ourMissionTitle
          ourVisionTitle
        }
      }
    }
  `)

  return data
}
