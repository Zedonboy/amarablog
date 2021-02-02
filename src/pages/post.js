import React from "react"
import Layout from "../components/layout"
import AuthorFooter from "../components/AuthorUI"
import Tag from "../components/tag"
import PostItem from "../components/postItem"
import Loading from "../components/Loading"
import useSWR from "swr"
import { host, key } from "../config/config"
import { fetcher } from "."
function shorten(data = "") {
  if(data.length > 20){
    return data.substring(0, 20).concat("...")
  } else data.concat("...")
}
const Post = () => {
  let url = new URL(window.location.href)
  const slug = url.searchParams.get("slug")
  const { data : postData, error } = useSWR(
    `${host}/posts/slug/${slug}?key=${key}&include=authors,tags`,
    fetcher
  )
  const { data: _latestPost, error: latestPostError } = useSWR(
    `${host}/posts/?key=${key}&published_at=DESC&limit=7&include=tags,authors`,
    fetcher
  )
  const { data: _postTags, error: postTagsError } = useSWR(
    postData
      ? `${host}/posts/?key=${key}&filter=tag:${postData.posts[0].primary_tag.slug}&limit=6&publish_at=DESC`
      : null,
    fetcher
  )
  let data = null
  let latestPost = null
  let postTags = null
  if(postData) data = postData.posts[0]
  if(_latestPost) latestPost = _latestPost.posts
  if(_postTags) postTags = _postTags.posts
  return (
    <Layout>
      <main className="md:px-40 bg-pink-light dark:bg-gray-900 font-sans">
        <article className="font-sans dark:text-white">
          {error ? <div>Error Trying to Fetch Post</div> : null}
          {data ? (
            <header className="post-header">
              <section>
                <a
                  href={`/tag?slug=${data.primary_tag.slug}`}
                  className="hover:underline font-semibold uppercase text-sm text-emerald-500"
                >
                  {data.primary_tag.name}
                </a>
              </section>
              <h1 class="font-semibold text-6xl md:text-7xl">{data.title}</h1>
              <p className="post-excerpt">{data.excerpt}</p>
              <AuthorFooter
                className="mt-4 border-t-2 border-gray-200"
                author={data.primary_author}
                humanDate={data.published_at}
              />
            </header>
          ) : (
            <Loading />
          )}

          {data ? (
            <section
              class="post-content dark:text-white"
              dangerouslySetInnerHTML={{
                __html: data.html,
              }}
            ></section>
          ) : (
            <Loading />
          )}

          {data ? (
            <section className="mt-4">
              <footer className="w-full flex">
                <ul className="flex flex-wrap p-2 justify-start">
                  {data.tags.map(t => (
                    <Tag tag={t.name} url={`/tag?slug=${t.slug}`} />
                  ))}
                </ul>
              </footer>
            </section>
          ) : (
            <Loading />
          )}
        </article>
        <section className="w-full flex flex-wrap">
          <section className="w-full md:w-1/3 p-4">
            <section className="shadow w-full max-h-416p overflow-auto dark:text-white dark:bg-gray-900 bg-white">
              <header className="p-4">
                <span>
                  more on{" "}
                  <a
                    href="/fet"
                    className="hover:underline font-semibold uppercase text-sm text-emerald-500"
                  >
                    {data ? data.primary_tag.name : null}
                  </a>
                </span>
              </header>
              {postTagsError ? <div>Error could not fetch data</div> : null}
              {postTags ? (
                <>
                  {postTags.map(p => (
                    <PostItem name={p.title} desc={shorten(p.excerpt)} />
                  ))}
                </>
              ) : (
                <Loading />
              )}
            </section>
          </section>

          <section className="w-full md:w-1/3 p-4">
            <section className="shadow w-full max-h-416p dark:bg-gray-900 overflow-auto dark:text-white bg-white">
              <header className="p-4">
                <span className="font-semibold uppercase text-lg">
                  Recent Posts
                </span>
              </header>
              {latestPostError ? <div>Error could not fetch data</div> : null}
              {latestPost ? (
                <>
                  {latestPost.map(p => (
                    <PostItem name={p.title} desc={shorten(p.excerpt)} />
                  ))}
                </>
              ) : (
                <Loading />
              )}
            </section>
          </section>

          <section className="w-full md:w-1/3 p-4">
            <section className="shadow w-full max-h-416p dark:bg-gray-900 dark:text-white overflow-auto bg-white">
              {data ? (
                <>
                  <header className="p-4">
                    <span className="font-semibold uppercase text-lg">
                      About Author
                    </span>
                  </header>
                  <article className="flex p-4 flex-col justify-center">
                    <div className="justify-center flex">
                      <img
                        className="rounded-full ring-2 h-12 w-12 md:h-24 md:w-24"
                        src={data.primary_author.profile_image || null}
                      />
                    </div>
                    <figcaption className="font-semibold mt-4 text-base text-center">
                      {data.primary_author.name}
                    </figcaption>
                    <h1 className="mt-4 border-b-2 border-emerald-500">Bio</h1>
                    <p className="mt-4">
                      {data.primary_author.bio}
                    </p>
                    <footer className="flex p-2 justify-around">
                      {data.primary_author.twitter ? (
                        <a href={`www.twitter.com/${data.primary_author.twitter}`} className="text-gray-500 hover:text-emerald-500">
                        <i class="fab fa-twitter fa-2x"></i>
                      </a>
                      ) : null}
                      {
                        data.primary_author.facebook ? (
                          <a href={`www.facebook.com/${data.primary_author.twitter}`} className="text-gray-500 hover:text-emerald-500">
                        <i class="fab fa-facebook fa-2x"></i>
                      </a>
                        ) : null
                      }
                    </footer>
                  </article>
                </>
              ) : (
                <Loading />
              )}
            </section>
          </section>
        </section>
      </main>
    </Layout>
  )
}
export default Post
