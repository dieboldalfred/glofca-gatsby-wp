import { useStaticQuery, graphql } from "gatsby"

export const useGetBannersQuery = () => {
  const data = useStaticQuery(graphql`
    query GetBanners {
      wpPage(databaseId: { eq: 44 }) {
        homeBanners {
          heroTitle
          heroText
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
          ourMissionTitle
          ourMissionText
          ourMissionImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
          ourVisionTitle
          ourVisionText
          ourVisionImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)

  return data.wpPage.homeBanners
}
