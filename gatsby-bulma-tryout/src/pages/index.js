import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from '../scss/style.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={style.title}>helloworld</h1>
  </Layout>
)

export default IndexPage
