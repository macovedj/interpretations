import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <p><a style={{ color: `#9f8ec2`}} href="https://macovedj.github.io/threeRelativity/">Special Relativity Simulator</a></p>
    <p><a style={{ color: `#9f8ec2`}} href="https://github.com/macovedj">Github</a></p>
    <Link style={{ color: `#9f8ec2`}} to="/blog/">Blog to Come</Link>
  </Layout>
)

export default IndexPage
