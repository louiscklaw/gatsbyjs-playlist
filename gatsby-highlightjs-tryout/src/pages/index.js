import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <pre>
      <code className="js">
        console.log('helloworld 123321')
      </code>
    </pre>
  </Layout>
)

export default IndexPage
