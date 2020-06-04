import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import LightboxExample from '../components/lightbox-example'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LightboxExample />
  </Layout>
)

export default IndexPage
