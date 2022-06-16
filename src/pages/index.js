import React from "react"
import {
  Blogs,
  Cards,
  Hero,
  LogoBanner,
  Video,
  CTAAreaTwoCol,
  CTAAreaThreeCol,
  MailchimpForm,
  Blurb,
  VideoPlayer,
  ScrollButton,
} from "../components"
import Layout from "../components/Layout"
import subThemes from "../constants/themes"

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
  // const themes = useGetPagesQuery("themes")
  const databases = useGetDatabasesQuery()
  const projects = useGetProjectsQuery()
  const posts = useLatestPostsQuery()
  const home = useGetHomepageFieldsQuery()

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
        rightColumn={<VideoPlayer videoURL={home.cta1Media} />}
      />
      {/* <Video
        title="GLOFCA Project in Action during the First Year – 2021/2022"
        videoURL="https://www.youtube.com/watch?v=avvNRswHDks"
      /> */}
      <Blogs title="Latest News" posts={posts} showLink />
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
        rightColumn={<VideoPlayer videoURL={home.cta2Video} />}
      />

      <Cards title="Projects" link="projects" items={projects} />
      <CTAAreaThreeCol middleColumn={<MailchimpForm />} />
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
