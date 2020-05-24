import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import TestJavascript from "../components/test_javascript"
import TestHtml from '../components/test_html'
import TestBash from '../components/test_bash'
import TestPython from "../components/test_python"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <TestJavascript />
    <TestHtml />
    <TestBash />
    <TestPython />
  </Layout>
)

export default IndexPage
