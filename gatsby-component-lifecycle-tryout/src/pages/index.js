import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TestComponent from "../components/test-component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    helloworld
    <TestComponent />
    <Link to="/page2">page2</Link>
  </Layout>
)

export default IndexPage
