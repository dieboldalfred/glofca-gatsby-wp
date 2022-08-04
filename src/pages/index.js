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
import Layout from "../components/Layout"
import { useMediaQuery } from "react-responsive"

// hooks
import { useGetThemesQuery } from "../hooks/useGetThemes"
// import { useGetPagesQuery } from "../hooks/useGetPages"
import { useGetDatabasesQuery } from "../hooks/useGetDatabases"
import { useGetProjectsQuery } from "../hooks/useGetProjects"
import { useLatestPostsQuery } from "../hooks/useLatestPostsQuery"
import { useGetHomepageFieldsQuery } from "../hooks/useGetHomepageFields"

const HomePage = () => {
  // Graphql
  const themes = useGetThemesQuery()
  const databases = useGetDatabasesQuery()
  const projects = useGetProjectsQuery()
  const posts = useLatestPostsQuery()
  const home = useGetHomepageFieldsQuery()

  const isMobile = useMediaQuery({ query: "(max-width: 992px)" })

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
      <Cards title="Databases" link="databases" items={databases} />
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

      <Cards title="Projects" link="projects" items={projects} />
      {/* <CTAAreaThreeCol middleColumn={<MailchimpForm />} /> */}
      <Hero
        title={home.ourVisionTitle}
        content={home.ourVisionText}
        image={home.ourVisionImage.localFile}
      />
      <Cards title="Themes" link="themes" items={themes} />
    </Layout>
  )
}

export default HomePage
