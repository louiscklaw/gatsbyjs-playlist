import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ThemeContext from '../contexts/ThemeContext'

function IndexPage (props) {
  let {dark} = React.useContext(ThemeContext)
  return (
    <Layout>
      <SEO title="Home" />
      <h1 style={{backgroundColor: !dark ? 'grey' : 'white'}}> helloworld </h1>

      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
