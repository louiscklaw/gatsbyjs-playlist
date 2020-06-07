import React from 'react'

import {StyleContext} from '../contexts/style-context'
function TestButton(){
  let {hello, toggleTheme, getActiveTheme} = React.useContext(StyleContext)

  return(
    <>
      <div style={getActiveTheme()}>
        {hello}
      </div>
      <button className="button" onClick={(e)=>{toggleTheme(e)}}>test button</button>
    </>
  )
}

export default TestButton