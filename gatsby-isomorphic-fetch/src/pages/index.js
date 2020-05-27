import React from "react"
import fetch from 'isomorphic-fetch'

import Layout from "../components/layout"
import SEO from "../components/seo"

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function IndexPage(){
  // adding same-oeigin from github page https://github.com/github/fetch
  var json_data = {}
  postData('http://localhost:5001/fir-tryout-f4e7a/us-central1/curl_fetch',
  { target_csv: 'https://istartup.hk/opendata/cev/cyberport_event.csv' })
  .then(data => {
    // console.log(data); // JSON data parsed by `response.json()` call
    json_data = data
  });

  // fetch('http://localhost:5001/fir-tryout-f4e7a/us-central1/curl_fetch',
  //   {
  //     credentials: 'same-origin' ,
  //     cache: 'no-cache',
  //     method: 'POST',
  //     body: {"hello":"world"}
  //   })
  //   .then(result => {
  //     return result.text()
  //   })
  //   .then(text => {
  //     console.log(text)
  //   })

  return(
    <Layout>
      <SEO title="Home" />
      <p>helloworld</p>
      <div>{json_data}</div>
    </Layout>
  )
}

export default IndexPage
