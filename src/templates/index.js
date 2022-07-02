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
import { useGetThemesQuery } from "../hooks/useGetThemes"
import { useGetDatabasesQuery } from "../hooks/useGetDatabases"
// import { useGetProjectsQuery } from "../hooks/useGetProjects"
import { useLatestPostsQuery } from "../hooks/useLatestPostsQuery"
import { useGetHomepageFieldsQuery } from "../hooks/useGetHomepageFields"

// utils
import { DESKTOP_BREAKPOINT, MOBILE_BREAKPOINT } from "../utils/breakpoints"

const HomePage = ({ data, pageContext }) => {
  const projects = data?.allWpPage.nodes
  const projectsTitle = data?.allWpCategory.nodes[0].name
  // folder: transformer
  // projectsTransformer : array [project, project] => map project => { ... project, slug: projects + slug }

  // Graphql
  const themes = useGetThemesQuery()
  const databases = useGetDatabasesQuery()
  // const projects = useGetProjectsQuery()
  const posts = useLatestPostsQuery()
  const home = useGetHomepageFieldsQuery()

  const isDesktopOrLaptop = useMediaQuery(DESKTOP_BREAKPOINT)
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)

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
      {/* {!isDesktopOrLaptop && <CTAAreaTwoCol rightColumn={<MailchimpForm />} />} */}
      <Hero
        title={home.ourVisionTitle}
        content={home.ourVisionText}
        image={home.ourVisionImage.localFile}
      />
      <Cards title="Themes" prefix="themes" items={themes} />
    </Layout>
  )
}

export const query = graphql`
  query GetProjects($projectsSlug: StringQueryOperatorInput) {
    allWpPage(
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
    allWpCategory(filter: { slug: $projectsSlug }) {
      nodes {
        name
      }
    }
  }
`

export default HomePage
