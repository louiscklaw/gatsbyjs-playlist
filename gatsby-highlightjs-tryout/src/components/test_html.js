import React from 'react'

import HighlightPre from './highlight_pre'

function TestHtml(){
  return(
    <>
      <h3>testing highlight html</h3>
      <HighlightPre
        language="html"
        content="<div>test</div>"
        >

      </HighlightPre>
    </>
  )
}

export default TestHtml