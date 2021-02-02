import React from 'react'

function getHumanDate(data) {
  let d = new Date(data)
  return d.toDateString()
}
const AuthorFooter = ({ author, humanDate, readTime, className}) => (
    <footer className={`flex space-x-2 pr-2 py-2 ${className}`}>
        <figure>
          <a href={`/author?slug=${author.slug}`}>
            <img className="rounded-full ring-2 h-12 w-12" src={author.profile_image || null} />
          </a>
        </figure>
        <section className="flex flex-col">
          <a href={`/author?slug=${author.slug}`}>
            <h1 className="text-lg dark:text-white font-medium">{author.name}</h1>
          </a>
          <span className="text-sm text-gray-500 font-light">
            <time>{getHumanDate(humanDate)}</time>
            &nbsp;
            &nbsp;
            {readTime} min
          </span>
        </section>
      </footer>
)

export default AuthorFooter