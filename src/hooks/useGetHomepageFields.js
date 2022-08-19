import { useStaticQuery, graphql } from "gatsby"

export const useGetHomepageFieldsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetBanners {
      wpPage(databaseId: { eq: 44 }) {
        homeBanners {
          heroTitle
          heroText
          heroSubtext
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  height: 1000
                  width: 2000
                )
              }
            }
          }
          ourMissionTitle
          ourMissionText
          ourMissionImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  height: 1000
                  width: 2000
                )
              }
            }
          }
          ourVisionTitle
          ourVisionText
          ourVisionImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  height: 1000
                  width: 2000
                )
              }
            }
          }
          cta1Title
          cta1Media
          cta2Title
          cta2Video
          cta2Button1Text
          cta2Button1Link
          cta2Button2Text
          cta2Button2Link
        }
      }
    }
  `)

  return data.wpPage.homeBanners
}
