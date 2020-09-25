import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import test_style from './styles.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class={test_style.testClass}>
      helloworld 123231
    </div>
  </Layout>
)

export default IndexPage
