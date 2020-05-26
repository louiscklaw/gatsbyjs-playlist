import React from "react"
import fetch from 'isomorphic-fetch'

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage(){
  fetch('/',{ credentials: 'same-origin' })
    .then(result => {
      return result.text()
    })
    .then(text => {
      console.log(text)
    })

  return(
    <Layout>
      <SEO title="Home" />
      <p>helloworld</p>
    </Layout>
  )
}

export default IndexPage
