import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyleContextProvider from '../contexts/style-context'
import Test from '../components/test'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyleContextProvider>
      <h1>Hi people</h1>
      <Test></Test>
    </StyleContextProvider>
  </Layout>
)

export default IndexPage
