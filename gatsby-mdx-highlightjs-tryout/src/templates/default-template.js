import React from "react"
import highlight from 'highlight.js'

function DefaultTemplate(props) {

  React.useEffect(()=>{
    // enable highlight using highlightjs
    document.querySelectorAll('code').forEach(ele => {
      highlight.highlightBlock(ele);
    })
  })

  return(
    <>
      {props.children}
    </>
  )
}

export default DefaultTemplate