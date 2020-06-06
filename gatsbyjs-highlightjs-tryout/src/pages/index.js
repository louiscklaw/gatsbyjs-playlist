import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import TestHighlight from '../components/test-highlight'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <TestHighlight language="bash" style={{padding:"unset", margin: "0.5em 0.5em", borderRadius:"3px"}}>
      ls -ll
    </TestHighlight>
  </Layout>
)

export default IndexPage
