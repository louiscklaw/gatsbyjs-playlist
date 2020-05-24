import React from 'react'

import HighlightPre from './highlight_pre'

function TestJavascript(){
  return(
    <>
      <h3>testing highlight javascript</h3>
      <HighlightPre
        language="javascript"
        content="console.log('helloworld')"
        >

      </HighlightPre>
    </>
  )
}

export default TestJavascript