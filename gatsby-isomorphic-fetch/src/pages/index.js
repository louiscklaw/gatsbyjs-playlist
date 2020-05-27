import React from "react"
import fetch from 'isomorphic-fetch'

import Layout from "../components/layout"
import SEO from "../components/seo"

// Example POST method implementation:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      json_data : {}
    }
  }

  postData() {
    return fetch('http://localhost:5001/fir-tryout-f4e7a/us-central1/curl_fetch', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify({
        target_csv: 'https://istartup.hk/opendata/cev/cyberport_event.csv'
      })
    })
    .then(res => res.text())
  }

  render() {
    this.postData()
      .then(text => {
        this.setState( {...this.state,json_data: JSON.parse(text).fetch_result})
      } )

    return(
      <Layout>
        <SEO title="Home" />
        <p>helloworld</p>
        <pre>{JSON.stringify({a:123,b:456})}</pre>
        <pre>{JSON.stringify(this.state.json_data, null , 2)}</pre>
      </Layout>
    )
  }
}

export default IndexPage
