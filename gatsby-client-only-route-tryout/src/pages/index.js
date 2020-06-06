
import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"

const App = () => {
  return (
    <Layout>
      index.js
      <Link to="/app">app page</Link>
    </Layout>
  )
}

export default App
