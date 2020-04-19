import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I interpret things here</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link style={{ color: `#9f8ec2`}} to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
