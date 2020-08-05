import React from "react"
import { Link } from "gatsby"

import api from '../api'

const IndexPage = () => {
  // Create state variables
  let [ responseData, setResponseData ] = React.useState( '' )
  React.useEffect(()=>{
    fetchData()
  },[])

  // fetches data
  const fetchData = ( ) => {
    // e.preventDefault()

    api.getData()
      .then( ( response ) => {
        // setResponseData(response.data)
        console.log( response )
        setResponseData(response.data)
      } )
      .catch( ( error ) => {
        console.log( error )
      } )
  }


    return (
      <div>
        <pre>
          {JSON.stringify(responseData, null, 2)}
        </pre>
      </div>
    )
}

export default IndexPage