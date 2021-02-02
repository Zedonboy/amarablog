import React from "react"
import AuthorFooter from "./AuthorUI"
import Tag from "./tag"

const ArticleMedium = ({
  post,
  className
}) => (
  <article className={className}>
    <article className="flex shadow dark:shadow-none dark:bg-gray-900 rounded-lg bg-green-light hover:ring-2 dark:bg-transparent flex-col">
    <figure>
      <img className="w-full max-h-48 object-fill rounded-lg" src={post.feature_image} />
    </figure>
    <a className="p-4" href={`/post?slug=${post.slug}`}>
      <h1 className="dark:text-gray-100 font-semibold text-xl p-1">{post.title}</h1>
      <h1 className="dark:text-gray-100">{post.excerpt}</h1>
    </a>
    <AuthorFooter
    className="p-4"
      author={post.primary_author}
      readTime={post.read_time}
      humanDate={post.published_at}
    />
    <footer className="w-full flex">
      <ul className="flex p-2 flex-wrap justify-start">
        {post.tags.map(t => (
          <Tag tag={t.name} url={`/tag?slug=${t.slug}`}/>
        ))}
      </ul>
    </footer>
  </article>

  </article>
  )

export default ArticleMedium
