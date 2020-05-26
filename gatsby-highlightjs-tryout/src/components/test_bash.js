import React from 'react'

import HighlightPre from './highlight_pre'

function TestJavascript(){
  return(
    <>
      <h3>testing highlight bash</h3>
      <HighlightPre
        language="bash"
        content=
"#!/usr/bin/env bash
set -ex
"
        >
      </HighlightPre>
    </>
  )
}

export default TestJavascript