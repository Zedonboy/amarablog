import React from "react"

const PostItem = ({name, desc}) => (
  <section className="flex hover:border dark:bg-gray-900 rounded border-b-2 hover:border-emerald-500 p-4 flex-col">
    <a className="dark:text-white" href="/author">
<h1>{name}</h1>
    <span className="text-sm text-gray-500 font-light">
        {desc}
    </span>
    </a>
  </section>
)

export default PostItem
