import React from "react"

const BlogSection = ({title, children, className}) => (
  <section className={className || ""}>
    <h1 className="text-3xl dark:text-white">{title || ''}</h1>
    {children}
  </section>
)

export default BlogSection
