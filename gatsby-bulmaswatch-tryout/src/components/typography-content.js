import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'


function TypographyContent(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="typography">
      <h1 className={active_style.title}> Typography </h1>
      <hr />
      <div className={active_style.columns}>
        <div className={active_style.column}>
          <h1 className={combineStyles([active_style.title, active_style.is1])}> Title 1 </h1>
          <h2 className={combineStyles([active_style.title, active_style.is2])}> Title 2 </h2>
          <h3 className={combineStyles([active_style.title, active_style.is3])}> Title 3 </h3>
          <h4 className={combineStyles([active_style.title, active_style.is4])}> Title 4 </h4>
          <h5 className={combineStyles([active_style.title, active_style.is5])}> Title 5 </h5>
          <h6 className={combineStyles([active_style.title, active_style.is6])}> Title 6 </h6>
        </div>
        <div className={active_style.column}>
          <h1 className={combineStyles([active_style.subtitle, active_style.is1])}> Subtitle 1 </h1>
          <h2 className={combineStyles([active_style.subtitle, active_style.is2])}> Subtitle 2 </h2>
          <h3 className={combineStyles([active_style.subtitle, active_style.is3])}> Subtitle 3 </h3>
          <h4 className={combineStyles([active_style.subtitle, active_style.is4])}> Subtitle 4 </h4>
          <h5 className={combineStyles([active_style.subtitle, active_style.is5])}> Subtitle 5 </h5>
          <h6 className={combineStyles([active_style.subtitle, active_style.is6])}> Subtitle 6 </h6>
        </div>
        <div className={active_style.column}>
          <h1 className={active_style.title}> Title </h1>
          <h2 className={active_style.subtitle}> Subtitle </h2>
          <p className={combineStyles([active_style.title, active_style.is1])}> Title 1 </p>
          <p className={combineStyles([active_style.subtitle, active_style.is3])}> Subtitle 3 </p>
          <p className={combineStyles([active_style.title, active_style.is2])}> Title 2 </p>
          <p className={combineStyles([active_style.subtitle, active_style.is4])}> Subtitle 4 </p>
          <p className={combineStyles([active_style.title, active_style.is3])}> Title 3 </p>
          <p className={combineStyles([active_style.subtitle, active_style.is5])}> Subtitle 5 </p>
        </div>
      </div>
    </section>


  )
}

export default TypographyContent