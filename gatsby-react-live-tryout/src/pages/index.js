import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TestJavascript from '../components/test_javascript'

import reactLiveHome from '../components/theme'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import LiveEdit from '../components/LiveEdit'

const componentClassExample = `
class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
      </center>
    )
  }
}
`.trim();


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    helloworld

    <TestJavascript />

    {/* <Description>Write some component classes...</Description> */}
    <LiveEdit code={componentClassExample} />

    <LiveProvider code="<strong>Hello World!</strong>" theme={reactLiveHome}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>

  </Layout>
)

export default IndexPage
