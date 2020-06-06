import React from 'react'
import ClipboardJS from 'clipboard'

function TestCopyButton(){
  React.useEffect(()=>{
    new ClipboardJS('.btn');
  },[])

  return(
    <>
      <input id="foo" value="https://github.com/zenorocha/clipboard.js.git"></input>

      <button className="btn" data-clipboard-target="#foo">
          <img src="assets/clippy.svg" alt="Copy to clipboard" />
      </button>
    </>
  )
}

export default TestCopyButton