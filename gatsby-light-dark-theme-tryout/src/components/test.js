import React from 'react'

import {StyleContext} from '../contexts/style-context'

function Test(){
  let {hello, updateTheme, light_theme, getActiveTheme}  = React.useContext(StyleContext)
  console.log(React.useContext(StyleContext))
  return(
    <>
      <div style={getActiveTheme()}>
        {hello}
      </div>
      <button onClick={(e) => {updateTheme(!light_theme)}} >test button</button>
    </>
  )
}

export default Test