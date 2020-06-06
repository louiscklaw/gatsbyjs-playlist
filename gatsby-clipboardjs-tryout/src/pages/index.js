import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ClipboardJS from 'clipboard'

function IndexPage() {
  React.useEffect(()=>{
    new ClipboardJS('.btn');
  })

  return (
    <Layout>
      <SEO title="Home" />
      helloworld

      <input id="foo" value="https://github.com/zenorocha/clipboard.js.git"></input>

      <button class="btn" data-clipboard-target="#foo">
          <img src="assets/clippy.svg" alt="Copy to clipboard" />
      </button>
    </Layout>
  )
}

export default IndexPage
