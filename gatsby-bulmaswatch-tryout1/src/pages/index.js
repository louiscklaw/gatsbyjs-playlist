import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from '../components/nav'
import Cards from '../components/cards'

import SEO from "../components/seo"

import ThemeContext from '../contexts/ThemeContext'


function IndexPage(){
  const {active_style, rotateStyle} = React.useContext(ThemeContext)
  return(
    <Layout>

    <SEO title="Home" />
    <Navbar />
    <h1 className={active_style.title}>helloworld</h1>

    <button onClick={rotateStyle} > test rotate </button>

  </Layout>
  )
}


export default IndexPage
