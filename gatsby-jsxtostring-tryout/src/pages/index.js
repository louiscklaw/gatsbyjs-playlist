import React from "react"
import { Link } from "gatsby"
import jsxToString from 'jsx-to-string';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

let Basic = () => (
  <div>
    testing basic jsxtostring
  </div>
)

function IndexPage(){
  console.log(jsxToString(<Basic test1="test" />));
  return(
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Basic />
    </Layout>

  )
}

export default IndexPage
