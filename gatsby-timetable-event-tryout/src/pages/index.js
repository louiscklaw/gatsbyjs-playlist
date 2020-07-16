import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Loadable from "@loadable/component"

const LoadableTestTimeTables = Loadable(() => import('../components/test-time-tables'))

const IndexPage = () => (
  <Layout>
    <LoadableTestTimeTables />
  </Layout>
)

export default IndexPage
