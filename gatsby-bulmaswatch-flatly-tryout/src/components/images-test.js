import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'

import {combineStyles} from '../utils/common'

function ImagesTest(props){


  return(
    <section className={active_style.section} id="images">
    <h1 className={active_style.title}> Images </h1>
    <hr />
    <figure className={combineStyles([active_style.image, active_style.is128x128])}> <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
    </figure>
  </section>
  )

}

export default ImagesTest