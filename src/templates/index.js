import React from "react"
import {
  Blogs,
  Cards,
  Hero,
  LogoBanner,
  CTAAreaTwoCol,
  CTAAreaThreeCol,
  MailchimpForm,
  Blurb,
  VideoPlayer,
  ScrollButton,
} from "../components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { useMediaQuery } from "react-responsive"

// hooks
// import { useGetThemesQuery } from "../hooks/useGetThemes"
import { useGetDatabasesQuery } from "../hooks/useGetDatabases"
// import { useGetProjectsQuery } from "../hooks/useGetProjects"
import { useLatestPostsQuery } from "../hooks/useLatestPostsQuery"
// import { useGetHomepageFieldsQuery } from "../hooks/useGetHomepageFields"

// utils
import { DESKTOP_BREAKPOINT, MOBILE_BREAKPOINT } from "../utils/breakpoints"

const HomePage = ({ data, pageContext }) => {
  const projects = data?.projects.nodes
  const projectsTitle = data?.projectsTitle.nodes[0].name
  const themes = data?.themes.nodes
  const themesTitle = data?.themesTitle.nodes[0].name
  const home = data?.wpPage.homeBanners

  // Graphql
  const databases = useGetDatabasesQuery()
  const posts = useLatestPostsQuery()
  console.log(posts)
  // const home = useGetHomepageFieldsQuery()

  // breakpoints
  const isDesktopOrLaptop = useMediaQuery(DESKTOP_BREAKPOINT)
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)

  // how many posts to display?
  const visiblePosts = isMobile ? posts.slice(0, 3) : posts

  return (
    <Layout>
      <ScrollButton />
      <Hero
        title={home.heroTitle}
        image={home.heroImage.localFile}
        content={home.heroText}
        height="full"
      />
      <LogoBanner />
      <CTAAreaTwoCol
        leftColumn={<Blurb subHeading={home.cta1Title} />}
        rightColumn={
          <VideoPlayer
            videoURL={home.cta1Media}
            customClass="videoplayer--shadow videoplayer--cta"
          />
        }
      />
      <Blogs title="Latest News" posts={visiblePosts} showLink />
      <Hero
        title={home.ourMissionTitle}
        content={home.ourMissionText}
        image={home.ourMissionImage.localFile}
      />
      <Cards title="Databases" prefix="databases" items={databases} />
      <CTAAreaTwoCol
        leftColumn={
          <Blurb
            subHeading={home.cta2Title}
            buttonOneText={home.cta2Button1Text}
            buttonOneLink={home.cta2Button1Link}
            buttonTwoText={home.cta2Button2Text}
            buttonTwoLink={home.cta2Button2Link}
          />
        }
        rightColumn={
          <VideoPlayer
            videoURL={home.cta2Video}
            customClass="videoplayer--shadow videoplayer--cta"
          />
        }
      />

      <Cards
        title={projectsTitle}
        prefix="projects"
        items={projects}
        lang={pageContext.lang}
      />
      <CTAAreaThreeCol middleColumn={<MailchimpForm />} />
      <Hero
        title={home.ourVisionTitle}
        content={home.ourVisionText}
        image={home.ourVisionImage.localFile}
      />
      <Cards
        title={themesTitle}
        prefix="themes"
        items={themes}
        lang={pageContext.lang}
      />
    </Layout>
  )
}

export const query = graphql`
  query GetHomepageData(
    $projectsSlug: StringQueryOperatorInput
    $themesSlug: StringQueryOperatorInput
    $pageId: Int!
  ) {
    projects: allWpPage(
      filter: { categories: { nodes: { elemMatch: { slug: $projectsSlug } } } }
    ) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
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
        }
      }
    }
    projectsTitle: allWpCategory(filter: { slug: $projectsSlug }) {
      nodes {
        name
      }
    }
    themes: allWpPage(
      filter: { categories: { nodes: { elemMatch: { slug: $themesSlug } } } }
    ) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
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
        }
      }
    }
    themesTitle: allWpCategory(filter: { slug: $themesSlug }) {
      nodes {
        name
      }
    }
    wpPage(databaseId: { eq: $pageId }) {
      homeBanners {
        heroTitle
        heroText
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
`

export default HomePage
