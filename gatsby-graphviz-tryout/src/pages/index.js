import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Graphviz } from 'graphviz-react';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Graphviz dot={`graph {
        grandparent -- "parent A";
        child;
        "parent B" -- child;
        grandparent --  "parent B";
      }`} />

    <Graphviz dot={`digraph {
      a -> b;
      c;
      d -> c;
      a -> d;
    }`} />
  </Layout>
)

export default IndexPage
