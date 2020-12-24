import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="blog" />
    <h1>I'll write blog posts</h1>
    <Link style={{ color: `#9f8ec2`}} to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
