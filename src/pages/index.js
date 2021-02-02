import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogSection from "../components/BlogSection"
import ArticleBig from "../components/ArticleBig"
import ppl from "../images/about-img.jpg"
import author from "../images/gatsby-astronaut.png"
import ArticleMedium from "../components/articleMedium"
import SubscribeForm from "../components/SubscribeForm"
import HeadSection from "../components/headSection"
import SwitchBox from "../components/SwitchBox"
import Loading from "../components/Loading"
import useSWR from "swr"
import { host, key } from "../config/config"

export const fetcher = async (...url) => {
  const res = await fetch(url)
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.")
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}
const IndexPage = () => {
  const { data, error } = useSWR(
    `${host}/posts/?key=${key}&published_at=DESC&limit=7&include=tags,authors`,
    fetcher
  )
  return (
    <Layout>
      <HeadSection />
      <main className="px-10 md:px-40 bg-pink-light dark:bg-gray-900 font-sans">
        <BlogSection className="py-8">
          {error ? <div>Error Could not fetch articles</div> : null}
          {data ? (
            <>
              {data.posts.length > 0 ? (
                <ArticleBig post={data.posts[0]} />
              ) : (
                <div>No Posts</div>
              )}
            </>
          ) : (
            <Loading />
          )}
        </BlogSection>
        <BlogSection className="py-8" title="Recent Posts">
          <div className="flex flex-wrap">
            {error ? <div>Error Could not fetch articles</div> : null}
            {data ? (
              <>
                {data.posts.shift() &&
                  data.posts.map(post => (
                    <ArticleMedium
                      className="w-full md:w-2/6 p-2"
                      post={post}
                    />
                  ))}
              </>
            ) : (
              <Loading />
            )}
          </div>
        </BlogSection>
        <BlogSection className="flex p-4 md:p-32 flex-col justify-center">
          <h1 className="text-center text-gray-600 text-5xl">Subscribe</h1>
          <h1 className="text-center">Stay Up to date</h1>
          <SubscribeForm />
        </BlogSection>
      </main>
    </Layout>
  )
}

export default IndexPage
