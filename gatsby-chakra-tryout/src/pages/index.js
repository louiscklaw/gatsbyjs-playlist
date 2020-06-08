import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Button } from "@chakra-ui/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Button>button test</Button>
  </Layout>
)

export default IndexPage
