import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ThemeContext from '../contexts/ThemeContext'

function IndexPage (props) {
  let {active_style} = React.useContext(ThemeContext)

  return (
    <Layout>

      <SEO title="Home" />
      <h1 className={active_style.helloworld}> helloworld </h1>

    </Layout>
  )
}

export default IndexPage
