import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TestComponent2 from "../components/test-component2"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    helloworld
    <TestComponent2 />
    <Link to="/">back</Link>
  </Layout>
)

export default IndexPage
