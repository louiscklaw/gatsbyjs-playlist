import React from "react"

import Layout from "../components/layout"
import ErrorDemo from '../components/error-demo'
import Example from "../components/Example"
import QuickStart from "../components/quickstart"
import SevenChannelSelect from "../components/seven-channel-select"

import ResetForm from '../components/reset-form'

const IndexPage = () => (
  <Layout>
    helloworld
    <ResetForm />
    <SevenChannelSelect />
    <QuickStart />
    <ErrorDemo />
    <Example />
  </Layout>
)

export default IndexPage
