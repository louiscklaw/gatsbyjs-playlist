import React from 'react'
import ThemeContext from '../../contexts/ThemeContext'

import {combineStyles} from '../../utils/common'

function ThemeChangeButton(props){
  const {active_style, rotateStyle, lookUpStyleName} = React.useContext(ThemeContext)

  return(
    <button
      className={combineStyles([active_style.button, active_style.isLight])}
      onClick={rotateStyle}
    >
      {JSON.stringify(lookUpStyleName(active_style))}next theme
    </button>
  )
}


export default ThemeChangeButton