import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Example } from "./Example";
import { Refresh } from "./Refresh";

import "./style.css"

function IndexPage()
{
  const [count, setCount] = React.useState(0);
  return (
    <Layout>
      <SEO title="Home" />
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Example key={count} />
      </div>
    </Layout>
  )
}

export default IndexPage
