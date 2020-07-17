import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import YoutubeTile from '../components/youtube-tile'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <YoutubeTile
      videoSrcURL="https://www.youtube.com/embed/ynrp7W2trzs" videoTitle="test title"
    />
  </Layout>
)

export default IndexPage
