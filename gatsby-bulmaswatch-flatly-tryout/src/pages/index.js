import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from '../components/nav'
import SEO from "../components/seo"
import TestContent from '../components/test-content'

import flatly_style from '../scss/flatly/bulmaswatch.module.scss'

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <Navbar />
    <TestContent />

  </Layout>
)

export default IndexPage
