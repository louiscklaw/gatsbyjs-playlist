import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    helloworld
    <pre>
      {
        JSON.stringify(process.env.GATSBY_API_URL, null, 2)
      }
    </pre>
  </>
)

export default IndexPage
