import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from '../scss/styles.module.scss'

function IndexPage() {

  return (
    <Layout>
      <SEO title="Home" />
      <div class={style.testClass}>
        helloworld 123231
      </div>
      <Link to='/page-1'> to page 1</Link>
    </Layout>
    )
  }

export default IndexPage
