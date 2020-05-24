import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"

const App = () => {
  return (
    <Layout>
      <div>
        test client only route
        <Link to="/app">to app</Link>
      </div>
    </Layout>
  )
}

export default App