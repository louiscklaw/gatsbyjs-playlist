import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TestButton from '../components/test-button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <TestButton></TestButton>
  </Layout>
)

export default IndexPage
