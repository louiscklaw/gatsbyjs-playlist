import React from "react"

import Layout from "../components/layout"
import ErrorDemo from '../components/error-demo'
import Example from "../components/Example"
import QuickStart from "../components/quickstart"

const IndexPage = () => (
  <Layout>
    helloworld
    <QuickStart />
    <ErrorDemo />
    <Example />
  </Layout>
)

export default IndexPage
