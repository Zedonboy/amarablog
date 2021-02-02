import React from "react"
import Layout from "../components/layout"
import BlogSection from "../components/BlogSection"
import ArticleMedium from "../components/articleMedium"
import { key, host } from "../config/config"
import { fetcher } from "."
import Loading from "../components/Loading"
import useSWR from 'swr'

const AuthorPage = () => {
  let url = new URL(window.location.href)
  const slug = url.searchParams.get("slug")
  const { data : dataAuthor, error } = useSWR(
    `${host}/authors/slug/${slug}?key=${key}&include=authors,tags`,
    fetcher
  )
  const { data: _postTags, error: postTagsError } = useSWR(
    dataAuthor
      ? `${host}/posts/?key=${key}&include=tags,authors&filter=authors:${dataAuthor.authors[0].slug}&limit=6&publish_at=DESC`
      : null,
    fetcher
  )
  let data = null
  let postTags = null
  if(dataAuthor) data = dataAuthor.authors[0]
  if(_postTags) postTags = _postTags.posts
  return (
    <Layout>
      <main className="md:px-40 bg-pink-light dark:bg-gray-900 font-sans">
        {error ? <div>
          Error geting Author
        </div> : null}
        <header className="p-4 flex flex-wrap">
          {postTagsError ? <div>Error Fetching Post Data</div> : null}
          <figure className="p-2">
            {data ? (
              <img
                src={data.profile_image}
                className="rounded-full ring-2 h-12 w-12 md:h-24 md:w-24"
              />
            ) : (
              <Loading />
            )}
          </figure>
          <section className="ml-4 dark:text-white">
            <h1 className="text-3xl">{data ? data.name : null}</h1>
            <p>{data ? data.bio : null}</p>
            <footer className="flex p-2 justify-around">
              {data ? (
                <>
                  {data.twitter ? (
                    <a className="text-gray-500 hover:text-emerald-500">
                      <i class="fab fa-twitter fa-2x"></i>
                    </a>
                  ) : null}
                </>
              ) : (
                <Loading />
              )}
            </footer>
          </section>
        </header>
        <section className="p-4">
          <BlogSection title="Author's Posts">
            <div className="flex flex-wrap">
              {postTags ? (
                <>
                  {postTags.map(p => (
                    <ArticleMedium className="w-full md:w-2/6 p-2" post={p} />
                  ))}
                </>
              ) : (
                <Loading />
              )}
            </div>
          </BlogSection>
        </section>
      </main>
    </Layout>
  )
}

export default AuthorPage
