import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TestCopyButton from '../components/test-copy-button'
import TestCopyLink from '../components/test-copy-link'

function IndexPage() {

  return (
    <Layout>
      <SEO title="Home" />
      {/* <TestCopyButton /> */}

      <TestCopyLink text="para 1"/>
      <TestCopyLink text="para 2"/>
      <TestCopyLink text="para 3"/>
      <TestCopyLink text="para 4"/>
      <TestCopyLink text="para 5"/>

    </Layout>
  )
}

export default IndexPage
