import React from 'react'

function TestBox(props){
  return(
    <div>
      {JSON.stringify({...props}, null, 2)}
    </div>
  )
}

export default TestBox