import React from 'react'

import HighlightPre from './highlight_pre'

function TestPython(){
  return(
    <>
      <h3>testing highlight python</h3>
      <HighlightPre
        language="json"
        content=
'{"a":"b"}'
        >

      </HighlightPre>
    </>
  )
}

export default TestPython