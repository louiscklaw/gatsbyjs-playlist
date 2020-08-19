import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'

import FontAwesomeContext from '../contexts/FontAwesomeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {combineStyles} from '../utils/common'

function IconTest(props){
  const {active_style} = React.useContext(ThemeContext)

  const fa = React.useContext(FontAwesomeContext)

  return(
    <section className={active_style.section} id="icon">
    <h1 className={active_style.title}> Icons </h1>
    <hr />
    <span className={active_style.icon}>
      <FontAwesomeIcon icon={fa.faHome} size="1x" />

    </span>
    <span className={combineStyles([active_style.icon, active_style.isMedium])}>
      <FontAwesomeIcon icon={fa.faHome} style={{fontSize: '1.33em'}} />

    </span>
    <span className={combineStyles([active_style.icon, active_style.isLarge])}>
      <FontAwesomeIcon icon={fa.faHome} size="2x" />

    </span>
  </section>
  )

}

export default IconTest