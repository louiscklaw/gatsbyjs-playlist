import React from "react"
import { Link } from "gatsby"
import stringify from 'json-stable-stringify'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

var obj = { c: 8, b: [{z:6,y:5,x:4},7], a: 3 };
console.log(stringify(obj));

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
