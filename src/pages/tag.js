import React from "react"
import Layout from "../components/layout"
import BlogSection from "../components/BlogSection"
import ArticleMedium from "../components/articleMedium"
import ppl from "../images/about-img.jpg"
import useSWR from "swr"
import {key, host} from "../config/config"
import { fetcher } from "."
import Loading from "../components/Loading"

const TagPage = () => {
  let url = new URL(window.location.href)
  const slug = url.searchParams.get("slug")
  const { data: tagData, error } = useSWR(
    `${host}/tags/slug/${slug}?key=${key}&include=authors,tags`,
    fetcher
  )
  
  const { data: _postTags, error: postTagsError } = useSWR(
    tagData
      ? `${host}/posts/?key=${key}&include=tags,authors&filter=tag:${tagData.tags[0].slug}&limit=6&publish_at=DESC`
      : null,
    fetcher
  )

  let data = null
  let postTags = null
  if(tagData) data = tagData.tags[0]
  if(_postTags) postTags = _postTags.posts
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
              {postTags ? postTags.map(p => (
                <ArticleMedium
                  className="w-full md:w-2/6 p-2"
                  post={p}
                />
              )) : <Loading/>}
            </div>
          </BlogSection>
        </section>
      </main>
    </Layout>
  )
}

export default TagPage
