import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BulmaButton from '../components/bulma-button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div> helloworld </div>
    <BulmaButton />
  </Layout>
)

export default IndexPage
