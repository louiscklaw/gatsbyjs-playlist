import React from 'react'

import ThemeContext from '../contexts/ThemeContext'

import AsideContent from './aside-content'
import TypographyContent from './typography-content'
import BoxContent from './box-content'
import ButtonContent from './button-content'
import ContentTest from './content-test'
import DeleteTest from './delete-test'
// import FormTest from './form-test'
import IconsTest from './icons-test'

import {combineStyles} from '../utils/common'

function TestContent(props){
  const {active_style, rotateStyle} = React.useContext(ThemeContext)

  return(
    <div className={active_style.columns}>

      <div className={combineStyles([active_style.column, active_style.is2])}>
        <AsideContent />
      </div>

      <div className={active_style.column}>
        <TypographyContent />
        <BoxContent />
        <ButtonContent />
        <ContentTest />
        <ContentTest />
        <DeleteTest />
        {/* <FormTest /> */}
        <IconsTest />

      </div>

    </div>
  )
}

export default TestContent