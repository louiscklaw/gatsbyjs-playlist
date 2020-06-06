import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TestParagraph from '../components/test_paragraph'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TestParagraph test_id="paragraph1"></TestParagraph>
    <TestParagraph test_id="paragraph2"></TestParagraph>
    <TestParagraph test_id="paragraph3"></TestParagraph>
    <TestParagraph test_id="paragraph4"></TestParagraph>
    <TestParagraph test_id="paragraph5"></TestParagraph>
    <TestParagraph test_id="paragraph6"></TestParagraph>
  </Layout>
)

export default IndexPage
