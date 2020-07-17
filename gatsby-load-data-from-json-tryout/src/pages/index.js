import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TestBox from '../components/test-box'
import YoutubeCell from '../components/youtube-cell'

import GlobalContext from '../contexts/global-context'

function IndexPage() {
  const {channels} = React.useContext(GlobalContext)

  return (
  <Layout>
    <SEO title="Home" />
    {channels.map(x => {
      return (<YoutubeCell pos_id={x.pos_id} v_id={x.v_id}/>)
    })}
  </Layout>
)
}
export default IndexPage
