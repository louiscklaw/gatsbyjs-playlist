import React from "react"
import {Link} from 'gatsby'

import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Details from "../components/details"
import Login from "../components/login"
import DefaultPage from "../components/default_page"

import TestRouteParameters from '../components/test_route_parameters'

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Profile path="/profile" />
        <Details path="/details" />
        <Login path="/login" />
        <DefaultPage path="/" />
        <TestRouteParameters path="/TestRouteParameters/:test_param" />
      </Router>
    </Layout>
  )
}

export default App