import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BulmaButton from '../components/bulma-button'
import BulmaSwitch from '../components/bulma-switch'
import BumlaTagsInput from '../components/bulma-tags-input'
import BulmaCheckRadio from '../components/bulma-check-radio'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div> helloworld </div>

    <h3>button tryout, modal box tryout</h3>
    <BulmaButton />

    <h3>switch tryout</h3>
    <BulmaSwitch />

    <h3>tags input, not working</h3>
    <BumlaTagsInput />

    <h3>check radio</h3>
    <BulmaCheckRadio />


  </Layout>
)

export default IndexPage
