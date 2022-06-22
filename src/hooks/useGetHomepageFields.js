import { useStaticQuery, graphql } from "gatsby"

/*
back": {
                    "src": "/static/f2b53398a5c8e967e4d41db697ec2bb4/9466f/pexels-eberhard-grossgasteiger-691668-scaled.jpg",
                    "srcSet": "/static/f2b53398a5c8e967e4d41db697ec2bb4/e70fc/pexels-eberhard-grossgasteiger-691668-scaled.jpg 640w
                    ,\n/static/f2b53398a5c8e967e4d41db697ec2bb4/af556/pexels-eberhard-grossgasteiger-691668-scaled.jpg 1280w,
                    \n/static/f2b53398a5c8e967e4d41db697ec2bb4/9466f/pexels-eberhard-grossgasteiger-691668-scaled.jpg 2560w",
                    "sizes": "(min-width: 2560px) 2560px, 100vw"
                  },
                  "sources": [
                    {
                      "srcSet": "/static/f2b53398a5c8e967e4d41db697ec2bb4/62859/pexels-eberhard-grossgasteiger-691668-scaled.webp 640w,
                      \n/static/f2b53398a5c8e967e4d41db697ec2bb4/828a3/pexels-eberhard-grossgasteiger-691668-scaled.webp 1280w,
                      \n/static/f2b53398a5c8e967e4d41db697ec2bb4/bbd9a/pexels-eberhard-grossgasteiger-691668-scaled.webp 2560w",
*/
export const useGetHomepageFieldsQuery = () => {
  const data = useStaticQuery(graphql`
    query GetBanners {
      wpPage(databaseId: { eq: 44 }) {
        homeBanners {
          heroTitle
          heroText
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  height: 500
                  width: 500
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
                  height: 500
                  width: 500
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
                  height: 500
                  width: 500
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
