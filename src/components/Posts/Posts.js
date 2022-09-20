import React from "react"
import { Link } from "gatsby"

// components
import Post from "./Post/Post"
import { Section, SectionContent } from ".."

// styles
import "./posts.css"

const Posts = ({ title, posts, showLink }) => {
  return (
    <Section title={title}>
      <SectionContent customClass="posts__content">
        {posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            image={post.featuredImage}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </SectionContent>

      {showLink && (
        <SectionContent>
          <Link to="/news" className="btn btn-center">
            more posts
          </Link>
        </SectionContent>
      )}
    </Section>
  )
}

export default Posts
