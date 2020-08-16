import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function ImagesTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="images">
      <h1 className={active_style.title}> Images </h1>
      <hr />
      <figure className={combineStyles([active_style.image, active_style.is128x128])}> <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg">
      </figure>
    </section>
  )

}

export default ImagesTest