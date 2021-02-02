import React from "react"
import AuthorFooter from "./AuthorUI"
import Tag from "./tag"
const ArticleBig = ({
  post
}) => (
  <article className="flex flex-wrap">
    <figure className="w-full sm:w-7/12">
      <a href={`/post?slug=${post.slug}`}>
        <img
          className="w-full bg-pink-500 rounded-lg object-fill"
          src={post.feature_image || null}
        />
      </a>
    </figure>
    <article className="flex flex-col w-full sm:w-5/12 p-4">
      <a href={`/post/?slug=${post.slug}`} className="dark:text-white">
        <h1 className="text-3xl font-semibold p-1">{post.title}</h1>
        <p className="text-xl">{post.excerpt}</p>
      </a>
      <AuthorFooter
        author={post.primary_author}
        readTime={post.read_time}
        humanDate={post.published_at}
      />
    </article>
    <footer className="w-full flex">
      <ul className="flex flex-wrap p-2 justify-start">
        {post.tags.map(t => (
          <Tag tag={t.name} url={t.url}/>
        ))}
      </ul>
      
    </footer>
  </article>
)

export default ArticleBig
