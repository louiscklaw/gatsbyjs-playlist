import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import TestDonghnut from '../components/donghnut';
import TestBubble from '../components/bubble';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    chartjs tryout
    <TestDonghnut></TestDonghnut>
    <TestBubble></TestBubble>

  </Layout>
)

export default IndexPage
