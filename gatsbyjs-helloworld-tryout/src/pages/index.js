import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Container from "../components/container"
import Apple from "../components/apple"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>helloworld</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Container>test container 123321</Container>
    <Apple></Apple>
  </Layout>
)

export default IndexPage
