import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from '../components/nav'
// import Cards from '../components/cards'

import SEO from "../components/seo"

import TestContent from '../components/test-content'

import ThemeContext from '../contexts/ThemeContext'


function IndexPage(){
  const helloworld='hello world'

  const {active_style, rotateStyle} = React.useContext(ThemeContext)

  return(
    <Layout>
      {JSON.stringify(active_style)}
      <SEO title="Home" />
      <Navbar />
      <TestContent />

    </Layout>
  )
}


export default IndexPage
