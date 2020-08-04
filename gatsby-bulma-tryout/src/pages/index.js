import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from '../components/nav'
import Cards from '../components/cards'

import SEO from "../components/seo"

import style from '../scss/style.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <h1 className={style.title}>helloworld</h1>
    <Cards />
  </Layout>
)

export default IndexPage
