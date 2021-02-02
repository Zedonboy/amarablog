import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import BlogSection from "../components/BlogSection"
import ArticleMedium from "../components/articleMedium"
import { key, host } from "../config/config"
import { fetcher } from "."
import Loading from "../components/Loading"

const TagPage = () => {
  const [data, setTagData] = useState(null)
  const [error, setError] = useState(null)
  const [postTags, setPostTags] = useState(null)
  const [postTagsError, setPostTagsError] = useState(null)
  useEffect(() => {
    let url = new URL(window.location.href)
    const slug = url.searchParams.get("slug")
    const fetchData = async () => {
      fetcher(
        slug
          ? `${host}/tags/slug/${slug}?key=${key}&include=authors,tags`
          : null
      )
        .then(data => {
          setTagData(data.tags[0])
          fetcher(
            `${host}/posts/?key=${key}&include=tags,authors&filter=tag:${data.tags[0].slug}&limit=6&publish_at=DESC`
          )
            .then(data => setPostTags(data.posts))
            .catch(e => setPostTagsError(e))
        })
        .catch(e => setError(e))
    }

    fetchData()
  }, [])
  return (
    <Layout>
      <main className="md:px-40 bg-pink-light dark:bg-gray-900 font-sans">
        {error ? <div>Error Fetching Data</div> : null}
        <header className="p-4 flex flex-wrap">
          <section className="dark:text-white">
            <h1 className="text-5xl">{data ? data.name : null}</h1>
            <p>{data ? data.description : null}</p>
          </section>
        </header>
        <section className="p-4">
          <BlogSection title="Tag Posts">
            <div className="flex flex-wrap">
              {postTags ? (
                postTags.map(p => (
                  <ArticleMedium className="w-full md:w-2/6 p-2" post={p} />
                ))
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

export default TagPage
