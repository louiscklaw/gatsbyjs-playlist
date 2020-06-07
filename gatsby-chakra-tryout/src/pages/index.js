import React from "react"

import { Button } from "@chakra-ui/core";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>helloworld</h1>

    <div>helloworld</div>
    <div>
      <Button>test</Button>
    </div>

  </Layout>
)

export default IndexPage
