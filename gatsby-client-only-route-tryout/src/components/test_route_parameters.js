import React from 'react'

function TestRouteParameters(props){
  return(
    <>
      <pre>
        test route parameters
        {JSON.stringify(props, null, 2)}
      </pre>
    </>
  )
}

export default TestRouteParameters