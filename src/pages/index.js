import React from "react"
import { Blogs, Cards, Hero, LogoBanner, Video } from "../components"
import Layout from "../components/Layout"
import subThemes from "../constants/themes"

// hooks
import { useGetThemesQuery } from "../hooks/useGetThemes"
// import { useGetPagesQuery } from "../hooks/useGetPages"
import { useGetDatabasesQuery } from "../hooks/useGetDatabases"
import { useGetProjectsQuery } from "../hooks/useGetProjects"
import { useLatestPostsQuery } from "../hooks/useLatestPostsQuery"
import { useGetBannersQuery } from "../hooks/useGetBanners"

const HomePage = () => {
  // Graphql
  const themes = useGetThemesQuery()
  // const themes = useGetPagesQuery("themes")
  const databases = useGetDatabasesQuery()
  const projects = useGetProjectsQuery()
  const posts = useLatestPostsQuery()
  const banners = useGetBannersQuery()

  return (
    <Layout>
      <Hero
        title={banners.heroTitle}
        image={banners.heroImage.localFile}
        content={banners.heroText}
        align="left"
      />
      <LogoBanner />
      <Video
        title="GLOFCA Project in Action during the First Year – 2021/2022"
        videoURL="https://www.youtube.com/watch?v=avvNRswHDks"
      />
      <Blogs title="Latest News" posts={posts} showLink />
      <Hero
        title={banners.ourMissionTitle}
        content={banners.ourMissionText}
        image={banners.ourMissionImage.localFile}
      />
      <Cards title="Databases" link="databases" items={databases} />
      <Cards title="Projects" link="projects" items={projects} />
      <Hero
        title={banners.ourVisionTitle}
        content={banners.ourVisionText}
        image={banners.ourVisionImage.localFile}
      />
      <Cards title="Themes" link="themes" items={themes} />
    </Layout>
  )
}

export default HomePage
