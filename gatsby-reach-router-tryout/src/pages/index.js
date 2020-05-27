import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  </Layout>
)

export default IndexPage
