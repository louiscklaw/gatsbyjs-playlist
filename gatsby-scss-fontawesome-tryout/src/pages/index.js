import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import test_style from '../scss/styles.module.scss'

function IndexPage(props){
  const combineStyle = (list_of_style) =>{
    return list_of_style.join(' ')
  }
  return(
    <Layout>
      <SEO title="Home" />
      <div class={test_style.testClass}>
        helloworld

        <i className={combineStyle([test_style.fab,test_style.faGithub, test_style.bigger])}></i>

      </div>
    </Layout>
  )

}
export default IndexPage
