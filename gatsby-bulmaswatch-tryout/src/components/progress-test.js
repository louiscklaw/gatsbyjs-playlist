import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function ProgressTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="progress">
      <h1 className={active_style.title}> Progress bars </h1>
      <hr />

      <progress className={combineStyles([active_style.progress])} max="100" value="15"> 15% </progress>

      <progress className={combineStyles([active_style.progress, active_style.isPrimary])} max="100" value="15"> 15% </progress>

      <progress className={combineStyles([active_style.progress, active_style.isLink])} max="100" value="15"> 15% </progress>

      <progress className={combineStyles([active_style.progress, active_style.isInfo])} max="100" value="15"> 15% </progress>

      <progress className={combineStyles([active_style.progress, active_style.isSuccess])} max="100" value="15"> 15% </progress>

      <progress className={combineStyles([active_style.progress, active_style.isWarning])} max="100" value="15"> 15% </progress>

      <progress className={combineStyles([active_style.progress, active_style.isDanger])} max="100" value="15"> 15% </progress>

      <progress className={combineStyles([active_style.progress, active_style.isSmall])} max="100" value="15"> 15% </progress>
      <progress className={active_style.progress} max="100" value="30"> 30% </progress>
      <progress className={combineStyles([active_style.progress, active_style.isMedium])} max="100" value="45"> 45% </progress>
      <progress className={combineStyles([active_style.progress, active_style.isLarge])} max="100" value="60"> 60% </progress>
      <h2 className={combineStyles([active_style.title, active_style.is2])}>Indeterminate</h2>
      <progress className={combineStyles([active_style.progress, active_style.isSmall, active_style.isPrimary])} max="100">15%</progress>
      <progress className={combineStyles([active_style.progress, active_style.isDanger])} max="100">30%</progress>
      <progress className={combineStyles([active_style.progress, active_style.isMedium, active_style.isDark])} max="100">45%</progress>
      <progress className={combineStyles([active_style.progress, active_style.isLarge, active_style.isInfo])} max="100">60%</progress>
    </section>
  )

}

export default ProgressTest