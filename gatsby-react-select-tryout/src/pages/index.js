import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import GettingStarted from "../components/getting-started"
import AnimatedComponents from '../components/animated-components'

const IndexPage = () => (
  <>
    react select tryout

    Getting Started
    <GettingStarted />

    Animated Components
    <AnimatedComponents />

  </>
)

export default IndexPage
