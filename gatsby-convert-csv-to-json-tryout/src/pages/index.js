import React from "react"
import papaparse from 'papaparse'


import Layout from "../components/layout"
import SEO from "../components/seo"

var csv_content = `From,To,Event,Venue
05/05/2020 14:00,05/05/2020 17:30,Lending & Financing Workshop,TBD
12/05/2020 14:00,12/05/2020 17:30,Virtual Banks and Ecosystems Workshop,TBD
19/05/2020 14:00,19/05/2020 17:30,Capital Markets Workshop,TBD
`

function convertCsvToJson(csv_in){
  var parsed_data = papaparse.parse(csv_in).data
  var data_length = parsed_data.length -1
  var row_length = parsed_data[0].length
  var out_json = []

  for(var i=1;i<data_length;i=i+1){
    var temp_d = {}
    for( var ii=0;ii<row_length;ii=ii+1){
      temp_d[parsed_data[0][ii]]=parsed_data[i][ii]
    }
    out_json=[...out_json, temp_d]
  }
  return out_json
}

function IndexPage(){
  var out_json = convertCsvToJson(csv_content)
  return(
    <>
      <Layout>
        <SEO title="Home" />
        <p>papaparse json output</p>
        <pre>
          { JSON.stringify(out_json, null, 2) }
        </pre>

        <p>papaparse raw output</p>
        <pre>
          { JSON.stringify(papaparse.parse(csv_content), null, 2) }
        </pre>

      </Layout>
    </>
  )
}

export default IndexPage
