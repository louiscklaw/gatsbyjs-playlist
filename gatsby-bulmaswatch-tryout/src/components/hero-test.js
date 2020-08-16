import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function IconsTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(

    <section className={active_style.section} id="icon">
      <h1 className={active_style.title}> Icons </h1>
      <hr />
      <span className={active_style.icon}>
        <i className={combineStyles([active_style.fas, active_style.faHome])}></i>
      </span>
      <span className={combineStyles([active_style.icon, active_style.isMedium])}>
        <i className={combineStyles([active_style.fas, active_style.faLg, active_style.faHome])}> </i>
      </span>
      <span className={combineStyles([active_style.icon, active_style.isLarge])}>
        <i className={combineStyles([active_style.fas, active_style.fa2x, active_style.faHome])}> </i>
      </span>
    </section>


  )

}

export default IconsTest