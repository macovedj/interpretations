import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <a style={{ color: `#9f8ec2`}} href="https://macovedj.github.io/threeRelativity/">Special Relativity Simulator</a>
    <Link style={{ color: `#9f8ec2`}} to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
