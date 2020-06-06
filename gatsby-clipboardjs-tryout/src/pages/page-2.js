import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TestCopyButton from '../components/test-copy-button'
import TestCopyLink from '../components/test-copy-link'

function IndexPage(props) {

  return (
    <Layout>
      <SEO title="Home" />
      {/* {JSON.stringify(props)} */}
      {/* <TestCopyButton /> */}

      <TestCopyLink text="para 1" {...props}/>
      <TestCopyLink text="para 2" {...props}/>
      <TestCopyLink text="para 3" {...props}/>
      <TestCopyLink text="para 4" {...props}/>
      <TestCopyLink text="para 5" {...props}/>

    </Layout>
  )
}

export default IndexPage
