import React from "react"
import AuthorFooter from "./AuthorUI"
import Tag from "./tag"

const ArticleMediumV2 = ({
  coverSrc,
  title,
  desc,
  authorImg,
  authorName,
  className,
  readTime,
  humanDate,
}) => (
  <article className={className}>
    <article className="flex shadow dark:shadow-none dark:bg-gray-900 rounded-lg bg-green-light dark:bg-transparent flex-col">
      <figure>
        <img
          className="w-full max-h-48 object-cover rounded-lg"
          src={coverSrc}
        />
      </figure>
      <a className="p-4" href="/blog">
        <h1 className="dark:text-gray-100 font-semibold text-xl p-1">{title}</h1>
        <h1 className="dark:text-gray-100">{desc}</h1>
      </a>
      <AuthorFooter
      className="p-4"
        authorImg={authorImg}
        authorName={authorName}
        readTime={readTime}
        humanDate={humanDate}
      />
      <footer className="w-full flex">
        <ul className="flex flex-wrap p-2 justify-start">
          <Tag tag="love" />
          <Tag tag="love" />
          <Tag tag="love" />
        </ul>
       
      </footer>
    </article>
  </article>
)

export default ArticleMediumV2
